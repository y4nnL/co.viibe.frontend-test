<script src="./Home.ts"></script>
<style lang="sass">@import "./Home.sass"</style>

<template>
  <div class="home">
    <div class="home_userList">
      <h3 class="home_userList_title">
        <span>Liste des utilisateurs</span>
        <transition name="-fade">
          <mu-circular-progress v-if="isFetchingUserList"
                                color="primary"
                                :size="20" />
        </transition>
      </h3>
      <transition-group name="-slide"
                        tag="div"
                        class="home_userList_box">
        <div v-for="user in userList"
             :key="user._id"
             class="home_userList_item mu-card">
          <mu-avatar size="60">{{ user | initials }}</mu-avatar>
          <div class="mu-primary-text-color">{{ user | name }}</div>
        </div>
      </transition-group>
    </div>
    <h3 class="home_chat_title">Chat</h3>
    <div class="home_chat">
      <div v-for="(message, index) in messageList"
           :key="index"
           class="home_chat_message"
           :class="{
               '-me': isMessageFromMe(message),
               '-grouped': isMessageGrouped(message)
           }">
        <div class="home_chat_message_box">
          <span v-if="!isMessageFromMe(message) && !isMessageGrouped(message)"
                class="home_chat_message_box_name">{{ findUserByEmail(message.email) | name }}</span>
          <span class="home_chat_message_box_message">{{ message.message }}</span>
        </div>
      </div>
    </div>
    <form class="home_chat_form"
          @submit.prevent.stop="sendMessage">
      <mu-text-field class="home_chat_form_input"
                     v-model="message" />
      <mu-button class="home_chat_form_submit"
                 :class="{ '-active' : canSendMessage }"
                 flat>send
      </mu-button>
    </form>
  </div>
</template>

