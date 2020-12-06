import { User } from '../types'

declare module '../types' {
  namespace User {
    type GetterTree = {
      readonly userIsAuthenticated: Getter<State, Getters, boolean>;
    }
  }
}

const getterTree: User.GetterTree = {
  userIsAuthenticated(state): boolean {
    return !!state.email
  },
}

export default getterTree
