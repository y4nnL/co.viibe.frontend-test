import { Workout } from '../types'

declare module '../types' {
  namespace Workout {
    type GetterTree = {
      readonly workoutIsEmpty: Getter<State, Getters, boolean>;
    }
  }
}

const getterTree: Workout.GetterTree = {
  workoutIsEmpty(state): boolean {
    return state.list.length === 0;
  },
}

export default getterTree
