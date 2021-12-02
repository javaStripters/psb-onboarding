<template>
  <div 
    :class="[type ? 'divider--' + type : 'divider--hor']"
    :style="{'background': color ? color : 'gray'}"
  ></div>
</template>

<script>
export default {
  props: [
    'type',
    'color' /* String: 'gray', 'white' */
  ]
}
</script>

<style scoped>
  .divider--ver {
    height: 100%;
    width: 1px;
    background-color: white;
  }
  .divider--hor {
    min-height: 1px !important;
    max-height: 1px !important;
    width: 100%;
    background-color: white;
  }
  .divider--gray {
    background: gray;
  }
</style>