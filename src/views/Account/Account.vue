<script src="./Account.ts"></script>
<style lang="sass">@import "./Account.sass"</style>

<template>
  <div class="account">
    <mu-card>
      <mu-card-header :title="firstName + ' ' + lastName"
                      :sub-title="email">
        <mu-avatar slot="avatar">{{ initials }}</mu-avatar>
      </mu-card-header>
      <mu-button @click="logout"
                 flat>
        Logout
      </mu-button>
    </mu-card>
  </div>
</template>

