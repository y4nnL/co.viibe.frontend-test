import { Component, Vue } from 'vue-property-decorator'
import { User } from '@/storage/types'

import { initials, name } from '@/filters/user'

const STAGGER_DELAY: number = 50
const LOADER_DELAY: number = 600

@Component({
  filters: { initials, name },
})
export default class Home extends Vue {
  
  isFetchingUserList: boolean = true
  userList: User.Data[] = []
  
  mounted() {
    setTimeout(() => {
      this.$storage.dispatch('userListFetch', void 0)
        .then((userList) => {
          this.isFetchingUserList = false;
          userList
            // Exclude me
            .filter((user) => user._id !== this.$storage.state.user.data._id)
            // Stagger display
            .forEach((user, index) => {
              setTimeout(() => this.userList.push(user), (index + 1) * STAGGER_DELAY)
            })
        })
    }, LOADER_DELAY)
  }
  
}
