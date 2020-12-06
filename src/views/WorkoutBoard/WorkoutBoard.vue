<script src="./WorkoutBoard.ts"></script>
<style lang="sass">@import "./WorkoutBoard.sass"</style>

<template>
  <div class="workout-board">
    <router-link class="workout-board_link"
                 :to="$routes['workout-one']">
      Workout one
    </router-link>
    <router-link class="workout-board_link"
                 :to="$routes['workout-one']">
      Workout one
    </router-link>
    <router-link class="workout-board_link"
                 :to="$routes['workout-one']">
      Workout one
    </router-link>
    <router-link class="workout-board_link"
                 :to="$routes['workout-one']">
      Workout one
    </router-link>
  </div>
</template>

