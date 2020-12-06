import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import { User } from '../types'

const module: User.Module = {
  namespaced: false,
  actions,
  getters,
  mutations,
  state,
}

export default module
