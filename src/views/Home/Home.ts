import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  
  get userIsAuthenticated() {
    return this.$storage.getters.userIsAuthenticated
  }
  
  get userEmail() {
    return this.$storage.state.user.data.email
  }
}
