<template>
  <div class="user-card">
    <div class="user-card__icon">
      <img src="" alt="">
    </div>
    <div class="user-card__text">
      <div class="user-card__user-name">
        Eleanor Pena
      </div>
      <div class="user-card__profession">
        Middle QA
      </div>
      <div class="user-card__contact">
        tanya.hill@example.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.user-card {
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