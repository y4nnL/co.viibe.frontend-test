import { Component, Vue } from 'vue-property-decorator'
import { User } from '@/storage/types'

@Component
export default class Auth extends Vue {
  
  hasSubmitFailed: boolean = false
  isSubmitting: boolean = false
  
  model = {
    email: { error: '', value: '' },
    password: { error: '', value: '' }
  }
  
  submit() {
    if (this.isSubmitting) {
      return
    }
    this.validate()
    if (!this.model.email.error && !this.model.password.error) {
      this.isSubmitting = true
      this.hasSubmitFailed = false
      const payload: User.LoginPayload = {
        email: this.model.email.value,
        password: this.model.password.value,
      }
      this.$storage.dispatch('userLogin', payload)
        .catch(() => {
          this.isSubmitting = false
          this.hasSubmitFailed = true
        })
    }
  }
  
  validate() {
    this.model.email.error = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.model.email.value) ? '' :
      (this.model.email.value ? 'Email required' : 'Required')
    this.model.password.error = this.model.password.value ? '' : 'Required'
  }
  
}
