<template>
  <div>
    <div
      style="
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
    <div class="project">
      <div class="project__header">
        <div class="project__title">{{project && project.name}}</div>
        <button class="project__actions-btn">
          <img src="../../assets/three-vertical-dots.svg" alt="">
        </button>
        <div class="project__navigation navigation">
          <router-link
            class="navigation__item"
            :class="[$route.path.split('/')[5] === button.goTo ? 'navigation__item--active' : 'navigation__item--passive']"
            v-for="(button, index) in navigationButtons"
            :key="index"
            :to="button.goTo"
            
          >
            {{button.text}}
          </router-link>
        </div>
      </div>
      <div class="project__body">
        <router-view
          :project="project"
        ></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../components/Title.vue'
import SearchBox from '../../components/SearchBox.vue'
export default {
  data: () => ({
    navigationButtons: [
      {
        name: 'description',
        text: 'Описание проекта',
        goTo: 'description',
      },
      {
        name: 'architecture',
        text: 'Архитектура',
        goTo: 'architecture',
      },
      {
        name: 'team',
        text: 'Команда',
        goTo: 'team',
      },
      {
        name: 'documentation',
        text: 'Документация',
        goTo: 'documentation',
      },
      {
        name: 'events',
        text: 'Мероприятия',
        goTo: 'events',
      },
    ],
    project: null,
  }),
  methods: {
    getProject() {
      fetch(this.$store.state.server + '/projects/' + this.$route.params.id)
      .then(res => res.json())
      .then(res => {
        this.project = res
        console.log(res)
      })
    }
  },
  mounted() {
    this.getProject()
  },
  components: {
    Title,
    SearchBox,
  }
}
</script>

<style scoped>
.project {
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: calc(100vh - 180px - 20px);
  background: white;
  padding: 20px 30px;
}
.project__header {
  height: 112px;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  display: grid;
  grid-template-columns: auto 30px;
  grid-template-rows: 30px 50px;
  row-gap: 30px;
  align-items: center;
  margin-bottom: 15px;
}
.project__title {
  font-size: 20px;
}
.project__actions-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project__navigation {
  grid-area: 2 / 1 / 3 / -1;
  align-self: end;
  width: calc(100% - 250px - 30px);
}
.navigation {
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-radius: 7px;
}
.navigation__item--active {
  background: #1B1587;
  transition: .5s all;
  color: white;
}
.navigation__item--passive {
  background: rgba(48, 40, 171, 0.07);
  transition: .5s all;
  color: #747F8B;
  background: rgba(48, 40, 171, 0.07);

} 
.navigation__item {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 30px;
  width: 100%;
  border: 1px solid #ddd;
}
.navigation .navigation__item:first-child {
  border-radius: 7px 0 0 7px;
}
.navigation .navigation__item:last-child {
  border-radius: 0px 7px 7px 0px;
}
.project__body {
  height: calc(100% - 112px);
  background: white !important;
  overflow-y: auto;
}
</style>