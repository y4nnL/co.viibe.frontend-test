import { RouteConfig } from 'vue-router'

import AccountComponent from '@/views/Account'
import AuthComponent from '@/views/Auth'
import HomeComponent from '@/views/Home'

export interface AppRouteConfig extends RouteConfig {
  name: string;
  meta: {
    auth: boolean;
    level: number;
    position: number;
  }
}

export enum RouteNames {
  Account = 'account',
  Auth = 'auth',
  Catch = 'catch',
  Default = 'default',
  Home = 'home',
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Account

const accountRoute: AppRouteConfig = {
  component: AccountComponent,
  name: RouteNames.Account,
  path: '/account',
  meta: {
    auth: true,
    level: 2,
    position: 2,
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Auth

const authRoute: AppRouteConfig = {
  component: AuthComponent,
  name: RouteNames.Auth,
  path: '/auth',
  meta: {
    auth: false,
    level: 1,
    position: -1,
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Home

const homeRoute: AppRouteConfig = {
  component: HomeComponent,
  name: RouteNames.Home,
  path: '/home',
  meta: {
    auth: true,
    level: 2,
    position: 1,
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Default

const defaultRoute: AppRouteConfig = {
  name: RouteNames.Default,
  path: '/',
  redirect: { name: RouteNames.Home },
  meta: {
    auth: false,
    level: -1,
    position: -1,
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Catch

const catchRoute: AppRouteConfig = {
  name: RouteNames.Catch,
  path: '*',
  redirect: { name: RouteNames.Default },
  meta: {
    auth: false,
    level: -1,
    position: -1,
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export

export const routes: AppRouteConfig[] = [
  accountRoute,
  authRoute,
  defaultRoute,
  homeRoute,
  // Catch unmatched routes
  catchRoute,
]

export default routes
