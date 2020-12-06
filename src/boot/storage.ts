import Vue from 'vue'

import { Boot } from '@/app'
import { Storage } from '@/storage/types'

declare module 'vue/types/vue' {
  interface Vue {
    $storage: Storage;
  }
}

export default function ({ storage }: Boot): void {
  Vue.prototype.$storage = storage
}
