<template>
  <div class="authorized">
    <Navigation />
    <div class="authorized__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
export default {
  

  components: {
    Navigation,
  }
}
</script>

<style scoped>
.authorized {
  background: #F2F2F2;
  height: 100vh;
}
.authorized__container {
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 15px;
}
</style>