import { Chat } from '../types'

declare module '../types' {
  namespace Chat {
    type State = {
      messageList: Chat.Message[]
    }
  }
}

const state: Chat.State = {
  messageList: []
}

export default state
