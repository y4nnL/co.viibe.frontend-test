<script src="./App.ts"></script>
<style lang="sass">@import "./App.sass"</style>

<template>
  <div class="app">
    <transition :name="routerTransitionName">
      <router-view class="app_content" />
    </transition>
    <transition name="-toggle">
      <mu-paper class="app_footer"
                v-if="isAuthenticated">
        <mu-bottom-nav :value="routeName">
          <mu-bottom-nav-item :value="$RouteNames.Home"
                              :to="$routes.home"
                              class="app_footer_link"
                              title="Home"
                              icon="home" />
          <mu-bottom-nav-item :value="$RouteNames.Account"
                              :to="$routes.account"
                              class="app_footer_link"
                              title="Account"
                              icon="person" />
        </mu-bottom-nav>
      </mu-paper>
    </transition>
  </div>
</template>

