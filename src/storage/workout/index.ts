import workoutActions from './actions'
import workoutGetterTree from './getters'
import workoutMutationTree from './mutations'
import workoutState from './state'
import { Workout } from '../types'

const module: Workout.Module = {
  namespaced: false,
  actions: workoutActions,
  getters: workoutGetterTree,
  mutations: workoutMutationTree,
  state: workoutState,
}

export default module
