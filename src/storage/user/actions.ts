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
  
  async userLogin({ state, commit }, loginPayload): Promise<boolean> {
    if (state.email) {
      return false
    } else {
      return API.login(loginPayload.email, loginPayload.password)
        .then(() => {
          commit('userEmail', loginPayload.email)
          return true
        })
        .catch(() => false)
    }
  },
  
  async userLogout({ state, commit }): Promise<boolean> {
    if (state.email) {
      return API.logout()
        .then(() => {
          commit('userEmail', '')
          return true
        })
        .catch(() => false)
    } else {
      return false
    }
  },
  
}

export default actionTree
