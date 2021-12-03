<template>
  <div class="projects">
    <div 
      style="
        grid-area: 1 / 1 / 2 / -1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      "
    >
      <Title 
        text="Проекты"
        weight="bold"
        size="xl"
      />
      <SearchBox />
    </div>
    <Card 
      class="projects__item--sm project-tile"
      v-for="(project, index) in projectsTiles"
      :key="index"
      :onClick="() => {openProject(project.id)}"
    > 
      <div class="project-tile__header">
        <div class="project-tile__title">
          <span>{{project.name}}</span>
          <div class="project-tile__underline--gray"></div>
          <div class="project-tile__underline--orange"></div>
        </div>
        
      </div>
      <div class="project-tile__body">
        <div class="project-tile__direction">
          <div class="project-tile__subtitle">Направление разработки:</div>
          <div class="project-tile__text">{{project.direction}}</div>
        </div>
        <div class="project-tile__participates">
          <div class="project-tile__participate" style="z-index: 3">

          </div>
          <div class="project-tile__participate" style="z-index: 2">

          </div>
          <div class="project-tile__participate" style="z-index: 1">

          </div>
        </div>
        <div class="project-tile__description">
          <div class="project-tile__subtitle">Описание проекта:</div>
          <div class="project-tile__text">{{project.description.slice(0, 40)}}...</div>
        </div>
        <div class="project-tile__tags">
          <div 
            class="project-tile__tag"
            v-for="(tag, index) in project.tags"
            :key="index"
          >
            {{tag}}
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../../components/Card.vue'
import Title from '../../components/Title.vue'
import SearchBox from '../../components/SearchBox.vue'
export default {
  data: () => ({
    projectsTiles: [],

  }),
  methods: {
    getProjects() {
      fetch(this.$store.state.server + '/projects/user/2/')
      .then(res => res.json())
      .then(res => {console.log(res) ; this.projectsTiles = res})
    },
    openProject(id) {
      console.log(id)
      this.$router.push('/authorized/projects/project/' + id + '/description')
    }
  },
  mounted() {
    this.getProjects()
  },
  components: {
    Card,
    Title,
    SearchBox,
  }
}
</script>


<style scoped>
  .projects {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
    padding: 30px 0;
    grid-auto-flow: row;
  }
  .project-tile__title {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    display: inline-block;
    line-height: 1.5em;
  }
  .project-tile__underline--gray {
    height: 1px;
    width: 70%;
    background: #979A9D;
  }
  .project-tile__underline--orange {
    z-index: 100;
    height: 1px;
    background: #EA5616;
    position: relative;
    top: -1px;
    width: 00%;
    transition: .5s all;
  }
  .project-tile:hover .project-tile__underline--orange {
    width: 70%;
    transition: .5s all;
  }
  .project-tile__body {
    height: 100%;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
  .project-tile__subtitle {
    font-size: 14px;
    color: #979A9D;
  }
  .project-tile__text {
    font-size: 14px;
    color: #30353B;
  }
  .project-tile__participates {
    display: grid;
    grid-template-columns: repeat(3, 10px);
  }
  .project-tile__participate {
    height: 32px;
    width: 32px;
    border: 1px solid white;
    background-color: #bbb;
    border-radius: 50%;
  }
  .project-tile__tags {
    display: flex;
    column-gap: 10px;
    justify-self: flex-end;
  }
  .project-tile__tag {
    padding: 2px 5px;
    font-size: 12px;
    background: #FFFADC;
    border-radius: 11px;
  }
  













  .projects__item--sm {
    grid-column-end: span 3;
  }
  .projects__item--md {
    grid-column-end: span 6;
  }
  .projects__item--lg {
    grid-column-end: span 9;
  }
  .projects__item--xl {
    grid-column-end: span 12;
  }
</style>