<script src="./App.ts"></script>
<style lang="sass">@import "./App.sass"</style>

<template>
  <div class="app">
    <transition :name="routerTransitionName">
      <router-view class="app_content" />
    </transition>
    <transition name="-toggle">
      <div class="app_footer"
           v-if="isAuthenticated">
        <router-link active-class="-active"
                     class="app_footer_link"
                     :to="$routes.home">
          Home
        </router-link>
        <router-link active-class="-active"
                     class="app_footer_link"
                     :to="$routes.account">
          Account
        </router-link>
      </div>
    </transition>
  </div>
</template>

