import { User } from '../types'

declare module '../types' {
  namespace User {
    type ActionTree = {
      userLogin: Action<User.ActionContext, Promise<boolean>, { email: string }>;
      userLogout: Action<User.ActionContext, boolean>;
    }
  }
}

const actionTree: User.ActionTree = {
  async userLogin({ state, commit }, payload): Promise<boolean> {
    if (state.email) {
      return false
    } else {
      commit('userEmail', payload.email)
      return true
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
