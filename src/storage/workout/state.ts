import { Workout } from '../types'

declare module '../types' {
  namespace Workout {
    type State = {
      list: string[]
    }
  }
}

const state: Workout.State = {
  list: []
}

export default state
