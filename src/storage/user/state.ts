import { User } from '../types'

declare module '../types' {
  namespace User {
    type State = {
      email: string;
    }
  }
}

const state: User.State = {
  email: '',
}

export default state
