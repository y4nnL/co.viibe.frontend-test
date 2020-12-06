import Vue from 'vue'
import VueRouter from 'vue-router'
import { ComponentOptions } from 'vue/types/options'
import { Storage } from '@/storage/types'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface Boot {
  main: ComponentOptions<Vue>,
  router: VueRouter,
  storage: Storage
}
