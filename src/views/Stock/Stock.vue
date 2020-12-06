<script src="./Stock.ts"></script>
<style lang="sass">@import "./Stock.sass"</style>

<template>
  <div class="stock">
    <div class="header">
      Stock
    </div>
    <div class="page">
      <button @click="setRole($UserRole.Admin)">{{ $UserRole.Admin }}</button> <br>
      <button @click="setRole($UserRole.User)">{{ $UserRole.User }}</button> <br>
      <button @click="toggleRole">Toggle</button> <br>
      userIsAuthenticated = "{{ userIsAuthenticated }}" <br>
      userRole = "{{ userRole }}" <br>
      <button @click="setProductList()">setProductList</button> <br>
      <button @click="pushProduct">pushProduct</button> <br>
      productIsEmpty = "{{ productIsEmpty }}" <br>
      productList = "{{ productList }}" <br>
      <button @click="setWorkoutList()">setWorkoutList</button> <br>
      <button @click="pushWorkout">pushWorkout</button> <br>
      workoutIsEmpty = "{{ workoutIsEmpty }}" <br>
      workoutList = "{{ workoutList }}" <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
    </div>
  </div>
</template>

