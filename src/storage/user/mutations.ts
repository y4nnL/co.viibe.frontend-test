import { User } from '../types'

declare module '../types' {
  namespace User {
    type MutationTree = {
      userData: Mutation<State, User.Data | null>;
    }
  }
}

const mutationTree: User.MutationTree = {
  userData(state, userData): void {
    if (userData) {
      try {
        state.data._id = userData._id
        state.data.address.city = userData.address.city
        state.data.address.postalCode = userData.address.postalCode
        state.data.email = userData.email
        state.data.firstName = userData.firstName
        state.data.lastName = userData.lastName
      } catch (e) {
        userData = null
      }
    }
    if (userData === null) {
      state.data._id = -1
      state.data.address.city = ''
      state.data.address.postalCode = 0
      state.data.email = ''
      state.data.firstName = ''
      state.data.lastName = ''
    }
  },
}

export default mutationTree
