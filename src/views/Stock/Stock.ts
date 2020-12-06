import { Component, Vue } from 'vue-property-decorator'

import { UserRole } from '@/storage/types'

@Component
export default class Stock extends Vue {
  
  setRole(role: UserRole) {
    this.$storage.commit('userRole', role)
  }
  
  setProductList() {
    this.$storage.commit('productList', [])
  }
  
  async pushProduct() {
    try {
      let pushed = await this.$storage.dispatch('productPush', Math.random().toString())
      console.log(pushed)
    } catch (e) {
      console.log(e.message)
    }
  }
  
  setWorkoutList() {
    this.$storage.commit('workoutList', [])
  }
  
  async pushWorkout() {
    try {
      let pushed = await this.$storage.dispatch('workoutPush', Math.random().toString())
      console.log(pushed)
    } catch (e) {
      console.log(e.message)
    }
  }
  
  toggleRole() {
    this.$storage.dispatch('userToggleRole', void 0)
      .then(role => console.log(role))
  }
  
  get userIsAuthenticated() {
    return this.$storage.getters.userIsAuthenticated
  }
  
  get userRole() {
    return this.$storage.state.user.role
  }
  
  get productIsEmpty() {
    return this.$storage.getters.productIsEmpty
  }
  
  get productList() {
    return this.$storage.state.product.list
  }
  
  get workoutIsEmpty() {
    return this.$storage.getters.workoutIsEmpty
  }
  
  get workoutList() {
    return this.$storage.state.workout.list
  }
  
}
