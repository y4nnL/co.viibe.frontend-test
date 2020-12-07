import Vue from 'vue'
import { HttpResponse } from 'vue-resource/types/vue_resource'

let baseUrl:URL = new URL(window.location.href)
let authToken: string = window.localStorage.getItem('authToken') || ''

export default {
  
  get authToken(): string {
    return authToken
  },
  
  set authToken(token: string) {
    authToken = token
    authToken ?
      window.localStorage.setItem('authToken', authToken) :
      window.localStorage.removeItem('authToken')
  },
  
  get baseUrl(): URL {
   return baseUrl
  },
  
  set baseUrl(url: URL) {
    baseUrl = url
  },
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Auth
  
  async login(email: string, password: string): Promise<HttpResponse> {
    const url = new URL('auth/login', this.baseUrl)
    const body = { email, password }
    return Vue.http.post(url.toString(), body)
      .then(response => {
        this.authToken = <string>response.data.token
        return response
      })
  },
  
  async logout(): Promise<HttpResponse> {
    const url = new URL('auth/logout', this.baseUrl)
    return Vue.http.get(url.toString())
      .then(response => {
        this.authToken = ''
        return response
      })
  },
  
  async me(): Promise<HttpResponse> {
    const url = new URL('auth/me', this.baseUrl)
    return Vue.http.get(url.toString())
  },
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // User
  
  async users(): Promise<HttpResponse> {
    const url = new URL('users', this.baseUrl)
    return Vue.http.get(url.toString())
  },
  
}
