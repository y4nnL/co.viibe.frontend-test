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
  </div>
</template>

