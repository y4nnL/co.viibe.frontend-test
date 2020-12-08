import { Chat } from '../types'

declare module '../types' {
  namespace Chat {
    type GetterTree = {
      readonly chatMessageList: Getter<State, Getters, Chat.Message[]>;
    }
  }
}

const getterTree: Chat.GetterTree = {
  chatMessageList(state): Chat.Message[] {
    return <Chat.Message[]>JSON.parse(JSON.stringify(state.messageList))
  },
}

export default getterTree
