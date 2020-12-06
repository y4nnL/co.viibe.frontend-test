import { Product } from '../types'

declare module '../types' {
  namespace Product {
    type GetterTree = {
      readonly productIsEmpty: Getter<State, Getters, boolean>;
    }
  }
}

const getterTree: Product.GetterTree = {
  productIsEmpty(state): boolean {
    return state.list.length === 0;
  },
}

export default getterTree
