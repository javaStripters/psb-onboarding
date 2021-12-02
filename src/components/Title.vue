<template>
  <div>
    <p 
      class="title" 
      :class="[
        size ? 'title--' + size : 'title--md',
        weight ? 'title--' + weight : 'title--normal'
      ]"
    >{{text && text}}</p>
  </div>
</template>

<script>
export default {
  props: [
    'size' /* String:  'xs', 'sm', 'md', 'lg', 'xl' */,
    'type' /* String: */,
    'text' /* String */,
    'weight' /* String: 'normal', 'bold'*/,
  ]
}
</script>

<style scoped>
  .title {

  }
  .title--xs {
    font-size: 18px;
  }
  .title--sm {
    font-size: 20px;
  }
  .title--md {
    font-size: 24px;
  }
  .title--lg {
    font-size: 36px;
  }
  .title--xl {
    font-size: 48px;
  }
  .title--normal {
    font-weight: 400;
  }
  .title--bold {
    font-weight: 700;
  }
</style>