import { User, UserRole } from '../types'

declare module '../types' {
  namespace User {
    type ActionTree = {
      userLogin: Action<ActionContext, Promise<boolean>, { email: string }>;
      userLogout: Action<ActionContext, boolean>;
      userToggleRole: Action<ActionContext, Promise<UserRole>>;
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
  async userToggleRole({ state, commit }): Promise<UserRole> {
    commit('userRole', state.role === UserRole.Admin ? UserRole.User : UserRole.Admin)
    return state.role
  },
}

export default actionTree
