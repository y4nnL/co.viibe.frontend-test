<script src="./Workout.ts"></script>
<style lang="sass">@import "./Workout.sass"</style>

<template>
  <div class="settings">
    <div class="header">
      Workout<br>
      <div class="header_baseline">
        <transition name="-slide-short-left">
          <router-view name="title" />
        </transition>
      </div>
    </div>
    <transition :name="routerTransitionName">
      <router-view class="page" />
    </transition>
  </div>
</template>

