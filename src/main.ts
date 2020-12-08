import MuseUI from 'muse-ui'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueSocketIO from 'vue-socket.io'
import * as Vuex from 'vuex'
import { ComponentOptions } from 'vue/types/options'
import { CreateElement } from 'vue/types/vue'
import { VNode } from 'vue'
import 'muse-ui/dist/muse-ui.css'

import AppComponent from '@/views/App'
import routerOptions from '@/router'
import storageModule from '@/storage'
import * as boot from '@/boot'
import { Storage } from '@/storage/types'
import { Store } from 'vuex'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    storage?: Storage;
  }
}

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter(routerOptions)
const storage: Storage = new Vuex.Store(storageModule)
const main: ComponentOptions<Vue> = {
  name: 'Main',
  render(h: CreateElement): VNode {
    return h(AppComponent)
  },
  storage,
  router,
}

Vue.use(new VueSocketIO({
  connection: process.env.VUE_APP_API_URL,
  vuex: {
    store: <Store<any>>storage,
    // TODO <yann> Find a way to use camel case instead
    mutationPrefix: 'chat_'
  }
}))

async function launch() {
  await boot.http({ main: main, router, storage })
  await boot.router({ main: main, router, storage })
  await boot.storage({ main: main, router, storage })
  await boot.user({ main: main, router, storage })
}

launch()
  .then(() => new Vue(main).$mount('#main'))
  .catch((e) => console.error('[Main] boot error : ', e))

