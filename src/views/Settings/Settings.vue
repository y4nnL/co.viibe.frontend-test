<script src="./Settings.ts"></script>
<style lang="sass">@import "./Settings.sass"</style>

<template>
  <div class="settings">
    <div class="header">
      Settings<br>
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

