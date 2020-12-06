import productModule from './product'
import userModule from './user'
// Wootr
import workoutModule from './workout'
import {
  Product,
  Root,
  User,
  // Wootr
  Workout,
} from './types'

const module: Root.Module = {
  modules: {
    [Product.namespace]: productModule,
    [User.namespace]: userModule,
    // Wootr
    [Workout.namespace]: workoutModule,
  },
  strict: true,
}

export default module


