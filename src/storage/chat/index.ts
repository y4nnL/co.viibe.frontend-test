import getters from './getters'
import mutations from './mutations'
import state from './state'
import { Chat } from '../types'

const module: Chat.Module = {
  namespaced: false,
  actions: {},
  getters,
  mutations,
  state,
}

export default module
