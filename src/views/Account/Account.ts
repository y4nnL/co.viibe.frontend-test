import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Account extends Vue {
  logout() {
    this.$storage.dispatch('userLogout', void 0)
  }
}
