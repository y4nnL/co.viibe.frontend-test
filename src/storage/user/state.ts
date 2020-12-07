import { User } from '../types'

declare module '../types' {
  namespace User {
    type State = {
      data: User.Data
    }
  }
}

const state: User.State = {
  data: {
    _id: -1,
    address: { city: '', postalCode: 0 },
    email: '',
    firstName: '',
    lastName: '',
  },
}

export default state
