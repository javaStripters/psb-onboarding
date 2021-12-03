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
      <div class="project-description__content-table content-table aside-card">
        <div>
          <div 
          class="content-table__item"
          v-for="(item, index) in mdArray"
          :key="index"
        >
          {{item.indexOf('#') !== -1 ? item.replaceAll('#', '') : ''}}
        </div>
        </div>
      </div>
      <div class="project-description__stack aside-card">
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
      <div class="project-description__tools-links aside-card">
        <div class="project-description__aside-title">Инструменты</div>
        <div 
          class="project-description__link-tile link-tile"
          v-for="(tool, index) in project.instruments"
          :key="index"
        >
          <div class="link-tile__icon">
            <img :src="
              tool.indexOf('github') !== -1 ? require('../../assets/git-icon.svg') : require('../../assets/figma-icon.svg')
            ">
          </div>
          <div class="link-tile__text">
            {{tool.slice(0, 23) + '...'}}
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
    },
    openSite(link) {
      this.$router.push(link)
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
  column-gap: 30px;
  row-gap: 10px;
}

.project-description__editor {
  overflow-y: auto;
  background: #F9F9F9;
  border-radius: 7px;
}
/*
.project-description__editor div:nth-child(2)  {
  height: 100% !important;
  overflow-y: auto;

} */
.project-description__aside {
  display: grid;
  grid-template-rows: 1fr 70px 1fr;
  row-gap: 10px;
}
.project-description__aside .aside-card {
  background: #F9F9F9;
  border: 1px solid #E3E5E8;
  box-sizing: border-box;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  padding: 10px 15px;
  color: #747F8B;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.project-description__stack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
}
.project-description__content-table {
}
.project-description__link-tile {
}
.link-tile {
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  height: 30px;
  padding: 4px;
  display: flex;
  column-gap: 4px;
  background: white;
  display: flex;
  align-items: center;
}
.link-tile__icon {
  display: flex;
  align-items: center;
}
</style>