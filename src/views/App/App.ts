import { Component, Mixins, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

import RouterTransition from '@/mixins/RouterTransition'

@Component
export default class App extends Mixins(RouterTransition) {
  
  routeName: string = ''
  
  created() {
    this.routeName = <string>this.$router.currentRoute.name
  }
  
  get isAuthenticated(): boolean {
    return this.$storage.getters.userIsAuthenticated
  }
  
  @Watch('$route')
  onRouteNameChange(toRoute: Route): void {
    this.routeName = <string>toRoute.name
  }
  
}
