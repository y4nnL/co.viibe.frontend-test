import chatModule from './chat'
import userModule from './user'
import {
  Chat,
  Root,
  User,
} from './types'

const module: Root.Module = {
  modules: {
    [User.namespace]: userModule,
    [Chat.namespace]: chatModule,
  },
  strict: true,
}

export default module


