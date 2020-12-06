import { Workout } from '../types'

declare module '../types' {
  namespace Workout {
    export type ActionTree = {
      workoutPush: Action<ActionContext, string, string>;
    }
  }
}

const actionTree: Workout.ActionTree = {
  workoutPush({ state, commit }, item: string): string {
    let list = state.list.slice()
    if (list.length < 3) {
      list.push(item)
      commit('workoutList', list)
      return item
    } else {
      throw new Error('Workout list is full')
    }
  },
}

export default actionTree
