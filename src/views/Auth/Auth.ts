import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Auth extends Vue {
  async login() {
    try {
      await this.$storage.dispatch('userLogin', { email: 'auth@again.com' })
    } catch(e) {
      console.log(e.message)
    }
  }
}
