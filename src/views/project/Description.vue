<template>
  <div class="project-description">
    <div class="project-description__editor">
      <markdown-editor 
        :options="options" 
        height="100%" 
        v-model="mdString"
        @change="toArray(mdString)"
      ></markdown-editor>
    </div>
    <div class="project-description__aside">
      <div class="project-description__content-table content-table">
        <div 
          class="content-table__item"
          v-for="(item, index) in mdArray"
          :key="index"
        >
          {{item.indexOf('#') !== -1 ? item.replaceAll('#', '') : ''}}
        </div>
      </div>
      <Divider color="white"/>
      <div class="project-description__stack">
        <div class="project-description__aside-title">Стек проекта</div>
        <div class="project-description__tags">
          <div 
            class="project-description__tag"
            v-for="(tag, index) in project.tags"
            :key="index"
          >
            {{tag}}
          </div>
        </div>
      </div>
      <Divider color="white"/>
      <div class="project-description__tools-links">
        <div class="project-description__aside-title">Инструменты</div>
        <div 
          class="project-description__link-tile link-tile"
        >
          <div class="link-tile__icon">
            <img src="" alt="">
          </div>
          <div class="link-tile__text">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from '../../components/Divider.vue'
export default {
  props: [
    'project'
  ],
  data: () => ({
    options: {                   
      lineNumbers: false,
      styleActiveLine: true,
      styleSelectedText: true,
      lineWrapping: true,
      indentWithTabs: true,
      tabSize: 2,
      indentUnit: 2
    },
    mdString: '# Hello world!',
    mdArray: []
  }),
  methods: {
    getProject() {
      fetch(this.$store.state.server + '/projects/' + this.$route.params.id)
      .then(res => res.json())
      .then(res => {
        this.project = res
        console.log(this.project)
      })
    },
    toArray(string) {
      this.mdArray = string.split('\n')
    }
  },
  watch: {
    project() {
      this.mdString = this.project.goals
    }
  },
  mounted() {
    this.mdString = this.project.goals
  },
  components: {
    Divider,
  }
}
</script>

<style scoped>
.project-description {
  display: grid;
  grid-template-columns: auto 250px;
  height: 100%;
}

.project-description__editor {
  overflow-y: auto;
}
/*
.project-description__editor div:nth-child(2)  {
  height: 100% !important;
  overflow-y: auto;

} */
.project-description__aside {
  background: #DFDFE2;
  display: grid;
  grid-template-rows: 1fr 1px 70px 1px 1fr;
}
.project-description__stack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
}
.project-description__tags {
  display: flex;
  column-gap: 10px;
  justify-self: flex-end;
}
.project-description__tag {
  padding: 2px 5px;
  font-size: 12px;
  background: #FFFADC;
  border-radius: 11px;
}
.project-description__tools-links {
  padding: 5px;
}
.project-description__content-table {
  padding: 5px;
}
.link-tile {
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  height: 30px;
  padding: 4px;
  display: flex;
  column-gap: 4px;
  background: white;
}
</style>