import API from '@/api'
import Vue from 'vue'
import { Boot } from '@/app'
import { Http, HttpOptions } from 'vue-resource/types/vue_resource'

declare module 'vue/types/vue' {
  interface VueConstructor<V extends Vue = Vue> {
    http: Http
  }
}

function authTokenInterceptor(request: HttpOptions) {
  if (API.authToken) {
    request.headers.set('Authorization', API.authToken)
  }
}

export default function ({}: Boot): void {
  // Vue resource lacks of TypeScript definitions for this
  // @ts-ignore
  Vue.http.interceptors.push(authTokenInterceptor)
  API.baseUrl = new URL(process.env.VUE_APP_API_URL)
}
