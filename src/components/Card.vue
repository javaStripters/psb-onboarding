<template>
  <div 
    class="card card--light"
    @click="onClick"
  >
    <div 
      class="card__header"
      v-if="title"
    >
      <div class="card__title">
        {{ title }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [
    'title' /* String */,
    'onClick' /* Function */,
  ]
}
</script>

<style scoped>
.card {
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 24px;
  margin: 0;
}
.card--light {
  background: #ffffff;
}
.card__title {
  font-size: 26px;
  font-weight: 20px;
  font-weight: 700;
  position: relative;
  top: -16px;
}
.card__divider {
  position: relative;
  left: -20px;
  width: calc(100% + 40px);
  height: 1px;
  background: #D5D9DC;
}
</style>