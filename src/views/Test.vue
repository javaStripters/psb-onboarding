<template>
  <div class="home">
    <iframe src="https://calendar.google.com/calendar/embed?src=zarbin2001%40gmail.com&ctz=Europe%2FMoscow" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    <Markdown /> 
    <div class="container">
        <markdown-editor :options="options"></markdown-editor>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Markdown from '../components/Markdown.vue'
export default {
  components: {
    Markdown,
  },
  
  data: () => ({
    options: {                   
      lineNumbers: true,
      styleActiveLine: true,
      styleSelectedText: true,
      lineWrapping: true,
      indentWithTabs: true,
      tabSize: 2,
      indentUnit: 2
    }
  })
}
</script>

<style scoped>

</style>