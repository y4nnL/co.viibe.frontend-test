import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Account extends Vue {
  
  email: string = ''
  firstName: string = ''
  lastName: string = ''
  
  created() {
    this.email = this.$storage.state.user.data.email
    this.firstName = this.$storage.state.user.data.firstName
    this.lastName = this.$storage.state.user.data.lastName
  }
  
  logout() {
    this.$storage.dispatch('userLogout', void 0)
  }
  
  get initials() {
    return this.firstName && this.lastName ?
      this.firstName[0].toUpperCase() + this.lastName[0].toUpperCase() : ''
  }
}
