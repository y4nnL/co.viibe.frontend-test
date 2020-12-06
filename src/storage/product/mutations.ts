import { Product } from '../types'

declare module '../types' {
  namespace Product {
    type MutationTree = {
      productList: Mutation<State, string[]>;
    }
  }
}

const mutationTree: Product.MutationTree = {
  productList(state, list): void {
    state.list = list
  },
}

export default mutationTree
