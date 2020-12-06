import { Component, Mixins } from 'vue-property-decorator'

import RouterTransition from '@/mixins/RouterTransition'

@Component
export default class App extends Mixins(RouterTransition) {

  get isAuthenticated(): boolean {
    return this.$storage.getters.userIsAuthenticated
  }
  
}
