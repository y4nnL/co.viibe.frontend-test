import userModule from './user'
import {
  Root,
  User,
} from './types'

const module: Root.Module = {
  modules: {
    [User.namespace]: userModule,
  },
  strict: true,
}

export default module


