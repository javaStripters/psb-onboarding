<template>
  <div class="page-header">
      <Title 
        :text="text"
        weight="bold"
        size="xl"
      />
      <SearchBox />
    </div>
</template>

<script>
import SearchBox from './SearchBox.vue'
import Title from './Title.vue'
export default {
  props: [
    'text',
  ],
  data: () => ({
    
  }),
  components: {
    SearchBox,
    Title,
  }
}
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>