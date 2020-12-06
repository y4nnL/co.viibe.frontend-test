import { UserRole } from '@/storage/types'
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $UserRole: typeof UserRole;
  }
}

export default function ({}): void {
  Vue.prototype.$UserRole = UserRole
}
