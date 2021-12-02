<template>
  <div>
    <div class="picking-doc__button">
        <button
          @click="onPickFile"
        >
          Выберите файл
        </button>
        
        <input
          style="display: none" 
          type="file"
          ref="fileInput"
          @change="onFilePicked"
        >
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    doc: {
      file: null,
      name: null,
      size: null /*in bytes*/,
      extension: null,
    },
  }),
  methods: {
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      this.doc.file = event.target.files[0]
      this.doc.name = event.target.files[0].name
      this.doc.extension = event.target.files[0].name.split('.').slice(-1).toString()
      this.doc.size = event.target.files[0].size
      this.sendDocToServer()
    },
    sendDocToServer() {
      const data = new FormData()
      this.isLoading = true
      data.append('file', this.doc.file)
      data.append('path', 'heh')
      for (const counter of data.values()) {
        console.log(counter)
      }
      console.log(data)
      fetch(this.$store.state.server + '/files', {
        method: "POST",
        body: data
      })
      .then(res => res.json())
      .then(res => console.log(res))
    },
  }
}
</script>

<style scoped>

</style>