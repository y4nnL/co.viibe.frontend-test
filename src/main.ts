import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Vuex from 'vuex'
import { ComponentOptions } from 'vue/types/options'
import { CreateElement } from 'vue/types/vue'
import { VNode } from 'vue'

import AppComponent from '@/views/App'
import routerOptions from '@/router'
import storageModule from '@/storage'
import * as boot from '@/boot'
import { Storage } from '@/storage/types'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    storage?: Storage;
  }
}

Vue.config.devtools = true
Vue.config.productionTip = false

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

async function launch() {
  await boot.router({ main: main, router, storage })
  await boot.storage({ main: main, router, storage })
  await boot.user({ main: main, router, storage })
}

launch()
  .then(() => new Vue(main).$mount('#main'))
  .catch((e) => console.error('[Main] boot error : ', e))

