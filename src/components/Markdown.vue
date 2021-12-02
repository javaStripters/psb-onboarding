<template>
  <div class="markdown">
    <div class="markdown__editor">
      <textarea v-model="content"></textarea>
    </div>
    <div class="markdown__preview">
      <div v-html="markdownToHtml"></div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  props: [
    'markdown'
  ],
  data: () => ({
    content:  "# Hello World",
  }),
  computed: {
    markdownToHtml(){
      return marked(this.content);
    }
  },
  watch: {
    markdown() {
      this.content === this.markdown
    }
  }
}
</script>

<style scoped>
.markdown {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;

  border: 1px #bbb solid;
  border-radius: 4px;
}
.markdown__editor {
  border-right: 1px #bbb solid;
}
.markdown__editor textarea {
  width: 100%;
  height: 100%;
}
</style>