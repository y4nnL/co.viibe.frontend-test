import { User } from '../types'

declare module '../types' {
  namespace User {
    type MutationTree = {
      userEmail: Mutation<State, string>;
    }
  }
}

const mutationTree: User.MutationTree = {
  userEmail(state, email): void {
    state.email = email
  },
}

export default mutationTree
