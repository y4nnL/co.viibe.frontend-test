import { UserRole, User } from '../types'

declare module '../types' {
  namespace User {
    type State = {
      email: string;
      role: UserRole;
    }
  }
}

const state: User.State = {
  email: 'stock@stock.stock',
  role: UserRole.User,
}

export default state
