import { User } from '../types'

declare module '../types' {
  
  namespace User {
    
    type LoginPayload = {
      email: string,
      password: string
    }
    
    type ActionTree = {
      userLogin: Action<User.ActionContext, Promise<boolean>, LoginPayload>;
      userLogout: Action<User.ActionContext, boolean>;
    }
    
  }
  
}

const actionTree: User.ActionTree = {
  async userLogin({ state, commit }, loginPayload): Promise<boolean> {
    if (state.email) {
      return false
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('userEmail', loginPayload.email)
          resolve(true)
        }, 2000)
      })
    }
  },
  userLogout({ state, commit }): boolean {
    if (state.email) {
      commit('userEmail', '')
      return true
    } else {
      return false
    }
  },
}

export default actionTree
