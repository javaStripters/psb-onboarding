<template>
  <div class="user-card" @click="onClick">
    <div class="user-card__icon">
      <img :src="imgUrl" alt="">
    </div>
    <div class="user-card__text">
      <div class="user-card__user-name">
        {{ fullName }}
      </div>
      <div class="user-card__profession">
        {{ profession }}
      </div>
      <div class="user-card__contact">
        {{ emailAdress }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'fullName' /* String */,
    'profession' /* String */,
    'emailAdress' /* String */,
    'imgUrl' /* String */,
    'onClick' /* Function */, 
  ]
}
</script>

<style scoped>
.user-card {
  cursor: pointer;
  background: #F5F6F7;
  box-shadow: 1px 1px 3px 0.5px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  display: flex;
  column-gap: 12px;
  padding: 16px 12px;
}
.user-card__icon {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #bbb;
  overflow: hidden;
}
.user-card__icon img {
  height: 100%;
  width: 100%;
}
.user-card__text { 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.user-card__user-name {
  font-size: 17px;
  font-weight: 700;
}
.user-card__proffesion {
  font-size: 15px;
}
.user-card__contact {
  font-size: 12px;
}
</style>