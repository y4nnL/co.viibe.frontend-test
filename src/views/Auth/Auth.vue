<script src="./Auth.ts"></script>
<style lang="sass">@import "./Auth.sass"</style>

<template>
  <div class="auth">
    <transition name="-fade">
      <div class="auth_error"
           v-if="hasSubmitFailed">
        Wrong credentials
      </div>
    </transition>
    <form class="auth_form mu-card"
          @submit.prevent.stop="submit"
          novalidate>
      <mu-text-field label="Email"
                     type="email"
                     v-model="model.email.value"
                     :error-text="model.email.error"
                     label-float />
      <mu-text-field label="Password"
                     type="password"
                     v-model="model.password.value"
                     :error-text="model.password.error"
                     label-float />
      <mu-button type="submit"
                 class="auth_form_submit"
                 flat>
        <mu-circular-progress v-if="isSubmitting"
                              color="white" />
        <span v-else>Login</span>
      </mu-button>
    </form>
  </div>
</template>

