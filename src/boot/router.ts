import Vue from 'vue'

import { RouteNames, routes, AppRouteConfig } from '@/router/routes'
import { Boot } from '@/app'
import { NavigationGuard } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $routes: { [name in RouteNames]: string };
  }
}

function findRouteByName(name: string, routes: AppRouteConfig[]): AppRouteConfig | null {
  for (let i = 0; i < routes.length; i++) {
    let currentRoute = routes[i]
    if (currentRoute.name === name) {
      return currentRoute
    } else if (currentRoute.children?.length) {
      let childRoute = findRouteByName(name, currentRoute.children as AppRouteConfig[])
      if (childRoute) {
        return childRoute
      }
    }
  }
  return null
}

export default function ({ router, storage }: Boot): void {
  // Put each RouteConfig name in the $routes dictionary with the corresponding RouteConfig path so the views have
  // access to named routes
  Vue.prototype.$routes = {}
  Object.values(RouteNames)
    .forEach((name: string) => {
      let route = findRouteByName(name, routes)
      if (route) {
        Vue.prototype.$routes[route.name] = route.path
      }
    })
  
  // Redirect to the correct page on login/logout
  storage.watch<boolean>(
    (state, getters) => getters.userIsAuthenticated,
    (userIsAuthenticated) => {
      router.push({ name: userIsAuthenticated ? RouteNames.Home : RouteNames.Auth })
    },
  )
  
  // Check that the user is authenticated when a auth protected route is matched
  const authGuard: NavigationGuard = (to, from, next) => {
    (to as AppRouteConfig).meta.auth ?
      (storage.getters.userIsAuthenticated ? next() : next({ name: RouteNames.Auth })) :
      (storage.getters.userIsAuthenticated ? next({ name: RouteNames.Home }) : next())
  }
  
  router.beforeEach(authGuard)
}
