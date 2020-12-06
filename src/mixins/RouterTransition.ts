import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

import { AppRouteConfig } from '@/router/routes'

export enum RouterTransitionAction {
  Dive = 'dive',
  Jump = 'jump',
  Slide = 'slide',
  None = '',
}

export enum RouterTransitionDirection {
  Left = 'left',
  Right = 'right',
  None = '',
}

@Component
export default class RouterTransition extends Vue {
  
  public routerTransitionAction: RouterTransitionAction = RouterTransitionAction.None
  public routerTransitionDirection: RouterTransitionDirection = RouterTransitionDirection.None
  
  get routerTransitionName() {
    let action = this.routerTransitionAction !== RouterTransitionAction.None ?
      '-' + this.routerTransitionAction : ''
    let direction = this.routerTransitionDirection !== RouterTransitionDirection.None ?
      '-' + this.routerTransitionDirection : ''
    return action + direction
  }
  
  @Watch('$route')
  onRouteChange(toRoute: Route, fromRoute: Route): void {
    let toPosition = (toRoute as AppRouteConfig).meta.position
    let fromPosition = (fromRoute as AppRouteConfig).meta.position
    let toLevel = (toRoute as AppRouteConfig).meta.level
    let fromLevel = (fromRoute as AppRouteConfig).meta.level
    
    this.routerTransitionDirection = toPosition > fromPosition ?
      RouterTransitionDirection.Left :
      (toPosition < fromPosition ? RouterTransitionDirection.Right : RouterTransitionDirection.None)
    this.routerTransitionAction = toLevel > fromLevel ?
      RouterTransitionAction.Dive : (toLevel < fromLevel ? RouterTransitionAction.Jump : RouterTransitionAction.Slide)
    
    if (toPosition < 0 || fromPosition < 0) {
      this.routerTransitionDirection = RouterTransitionDirection.None
    }
    
    if (toLevel < 0 || toLevel < 0) {
      this.routerTransitionAction = RouterTransitionAction.None
    }
  }
  
}
