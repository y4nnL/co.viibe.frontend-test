import { User } from '../types'

declare module '../types' {
  namespace User {
    type MutationTree = {
      userEmail: Mutation<State, string>;
      userRole: Mutation<State, UserRole>;
    }
  }
}

const mutationTree: User.MutationTree = {
  userEmail(state, email): void {
    state.email = email
  },
  userRole(state, role): void {
    state.role = role
  },
}

export default mutationTree
