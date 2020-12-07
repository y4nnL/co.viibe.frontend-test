import API from '@/api'
import { User } from '../types'

declare module '../types' {
  
  namespace User {
    
    type LoginPayload = {
      email: string,
      password: string
    }
    
    type ActionTree = {
      userLogin: Action<User.ActionContext, Promise<boolean>, LoginPayload>;
      userLogout: Action<User.ActionContext, Promise<boolean>>;
    }
    
  }
  
}

const actionTree: User.ActionTree = {
  
  async userLogin({ commit }, loginPayload): Promise<boolean> {
    return API.login(loginPayload.email, loginPayload.password)
      .then(() => API.me())
      .then((response) => commit('userData', <User.Data>response.data))
      .then(() => true)
      .catch(() => false)
  },
  
  async userLogout({ commit }): Promise<boolean> {
    return API.logout()
      .then(() => commit('userData', null))
      .then(() => true)
      .catch(() => false)
  },
  
}

export default actionTree
