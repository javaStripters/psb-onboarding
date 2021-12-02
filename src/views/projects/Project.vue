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
}
.project__header {
  height: 112px;
  width: 100%;
  padding: 10px 10px 0 10px;
  background: #4147A5;
  border-radius: 4px 4px 0px 0px;
  border-bottom: 3px #DFDFE2 solid;
  display: grid;
  grid-template-columns: auto 30px;
  grid-template-rows: 30px auto;
  align-items: center;
}
.project__title {
  font-size: 20px;
  color: #E3E5E8;
}
.project__actions-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project__navigation {
  grid-area: 2 / 1 / 3 / -1;
  align-self: end;

}
.navigation {
  display: flex;
  column-gap: 30px;
}
.navigation__item--active {
  border-bottom: tomato 3px solid;
}
.navigation__item {
  text-transform: uppercase;
  font-size: 14px;
  color: #E3E5E8;
  position: relative;
  top: 3px;
  line-height: 30px;
}
.project__body {
  height: calc(100% - 112px);
  background: white !important;
}
</style>