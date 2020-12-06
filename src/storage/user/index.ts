import userActions from './actions'
import userGetterTree from './getters'
import userMutationTree from './mutations'
import userState from './state'
import { User } from '../types'

const module: User.Module = {
  namespaced: false,
  actions: userActions,
  getters: userGetterTree,
  mutations: userMutationTree,
  state: userState,
}

export default module
