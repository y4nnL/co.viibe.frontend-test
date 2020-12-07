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
    return state.data._id >= 0
  },
}

export default getterTree
