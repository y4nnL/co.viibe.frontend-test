import { Product } from '../types'

declare module '../types' {
  namespace Product {
    export type ActionTree = {
      productPush: Action<ActionContext, string, string>;
    }
  }
}

const actionTree: Product.ActionTree = {
  productPush({ state, commit }, item: string): string {
    let list = state.list.slice()
    if (list.length < 3) {
      list.push(item)
      commit('productList', list)
      return item
    } else {
      throw new Error('Product list is full')
    }
  },
}

export default actionTree
