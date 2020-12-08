import { Chat } from '../types'

declare module '../types' {
  namespace Chat {
    type MutationTree = {
      // Forced to use snake case :(
      chat_message: Mutation<State, Chat.Message>;
    }
  }
}

const mutationTree: Chat.MutationTree = {
  chat_message(state, chatMessage): void {
    try {
      state.messageList.push({
        email: chatMessage.email,
        message: chatMessage.message,
      })
    } catch (e) {
    }
  },
}

export default mutationTree
