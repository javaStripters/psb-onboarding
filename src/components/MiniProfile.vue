<template>
  <div class="user-profile">
    <div class="user-profile__general" v-if="user">
      <div class="user-profile__icon">
        <img :src="$store.state.server + '/files/' + user.avatar" alt="">
      </div>
      <div class="user-profile__username">{{user.fullName}}</div>
      <div class="user-profile__profession">{{user.profession}}</div>
    </div>
    <div class="user-profile__contacts" v-if="user">
      <div 
        class="user-profile__contact"
        v-for="(contact, index) in Object.keys(user.contacts)"
        :key="index"
      >
        <img :src="require('../assets/' + contact + '.svg')" alt="">
        {{user.contacts[contact]}} 
      </div>
    </div>
    <div class="user-profile__about" v-if="user">
      О себе:
      <div class="user-profile__note">
        {{user.about}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'user'
  ]
}
</script>

<style scoped>
.user-profile {
  padding: 20px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.user-profile__icon {
  height: 80px;
  width: 80px;
  border-radius: 50px;
  background: #bbb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.user-profile__icon img {
  height: 100%;
  width: 100%;
}
.user-profile__general {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-profile__contacts {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}
.user-profile__contact {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.user-profile__note {
  padding: 5px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #D5D9DC;
  box-sizing: border-box;
  border-radius: 4px
}
</style>