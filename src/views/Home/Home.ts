import { Component, Vue } from 'vue-property-decorator'
import { Chat, User } from '@/storage/types'

import { initials, name } from '@/filters/user'

const STAGGER_DELAY: number = 50
const LOADER_DELAY: number = 600

@Component({
  filters: { initials, name },
})
export default class Home extends Vue {
  
  isSendingMessage: boolean = false
  isFetchingUserList: boolean = true
  message: string = ''
  userList: User.Data[] = []
  userListNow: User.Data[] = []
  
  mounted() {
    setTimeout(() => {
      this.$storage.dispatch('userListFetch', void 0)
        .then((userList) => {
          this.userListNow = userList
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
  
  sendMessage() {
    if (this.canSendMessage) {
      this.isSendingMessage = true
      this.$storage.dispatch('userMessage', this.message)
        .then((isMessageSent) => {
          if (isMessageSent) {
            this.message = ''
          } else {
            // TODO <yann> Show error if not
          }
        })
        .finally(() => this.isSendingMessage = false)
    }
  }
  
  findUserByEmail(email: string): User.Data {
    return this.userListNow.find((user) => user.email === email) || {
      _id: -1,
      address: { city: '', postalCode: 0 },
      email: '',
      firstName: '',
      lastName: '',
    };
  }
  
  isMessageFromMe(message: Chat.Message): boolean {
    return message.email === this.$storage.state.user.data.email
  }
  
  isMessageGrouped(message: Chat.Message): boolean {
    const messageList = this.messageList
    const previousMessage = messageList[messageList.indexOf(message) - 1]
    return previousMessage?.email === message.email
  }
  
  get canSendMessage(): boolean {
    return !this.isSendingMessage && !!this.message
  }
  
  get messageList(): Chat.Message[] {
    return this.isFetchingUserList ? [] : this.$storage.getters.chatMessageList
  }
  
}
