import { Workout } from '../types'

declare module '../types' {
  namespace Workout {
    type MutationTree = {
      workoutList: Mutation<State, string[]>;
    }
  }
}

const mutationTree: Workout.MutationTree = {
  workoutList(state, list): void {
    state.list = list
  },
}

export default mutationTree
