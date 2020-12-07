import API from '@/api'
import { User } from '../types'

declare module '../types' {
  
  namespace User {
    
    type LoginPayload = {
      email: string,
      password: string
    }
    
    type ActionTree = {
      userFetch: Action<User.ActionContext, Promise<boolean>>;
      userLogin: Action<User.ActionContext, Promise<boolean>, LoginPayload>;
      userLogout: Action<User.ActionContext, Promise<boolean>>;
      userListFetch: Action<User.ActionContext, Promise<User.Data[]>>;
    }
    
  }
  
}

const actionTree: User.ActionTree = {
  
  async userFetch({ commit }): Promise<boolean> {
    return API.me()
      .then((response) => commit('userData', <User.Data>response.data))
      .then(() => true)
      .catch(() => false)
  },
  
  async userLogin({ commit }, loginPayload): Promise<boolean> {
    return API.login(loginPayload.email, loginPayload.password)
      .then(() => this.dispatch('userFetch', void 0))
  },
  
  async userLogout({ commit }): Promise<boolean> {
    return API.logout()
      .then(() => commit('userData', null))
      .then(() => true)
      .catch(() => false)
  },
  
  async userListFetch(): Promise<User.Data[]> {
    return API.users()
      // TODO <yann> Cash strategy ?
      .then((response) => <User.Data[]>response.data)
      .catch(() => [])
  },
  
}

export default actionTree
