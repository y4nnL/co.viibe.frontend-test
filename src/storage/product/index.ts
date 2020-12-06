import productActions from './actions'
import productGetterTree from './getters'
import productMutationTree from './mutations'
import productState from './state'
import { Product } from '../types'

const module: Product.Module = {
  namespaced: false,
  actions: productActions,
  getters: productGetterTree,
  mutations: productMutationTree,
  state: productState,
}

export default module
