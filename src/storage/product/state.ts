import { Product } from '../types'

declare module '../types' {
  namespace Product {
    type State = {
      list: string[]
    }
  }
}

const state: Product.State = {
  list: []
}

export default state
