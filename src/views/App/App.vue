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
                     :to="$routes.stock">
          Stock
        </router-link>
        <router-link active-class="-active"
                     class="app_footer_link"
                     :to="$routes.shopping">
          Shopping
        </router-link>
        <router-link active-class="-active"
                     class="app_footer_link"
                     :to="$routes.settings">
          Settings
        </router-link>
        <router-link active-class="-active"
                     class="app_footer_link"
                     :to="$routes.workout">
          Workout
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

