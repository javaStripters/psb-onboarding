<template>
  <div>
    <PageHeader text="Адаптация" />
    <div class="adaptation">
      <div class="adaptation__header">
        <div class="adaptation__navigation">
          <router-link
            class="adaptation__navigation-item"
            :class="[button.goTo.split('/')[3] === $route.path.split('/')[3] ? 'adaptation__navigation-item--active' : 'adaptation__navigation-item--passive']"
            v-for="(button, index) in navigationButtons"
            :key="index"
            :to="button.goTo"
          >
            {{ button.text }}
          </router-link>
        </div>
      </div>

      <div class="adaptation__body">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
import PageHeader from '../components/PageHeader.vue'
export default {
  data: () => ({
    navigationButtons: [
      {
        name: 'general',
        text: 'Общая информация',
        goTo: '/authorized/adaptation/general'
      },
      {
        name: 'education',
        text: 'Обучения',
        goTo: '/authorized/adaptation/education'
      },
      {
        name: 'testing',
        text: 'Тестирование',
        goTo: '/authorized/adaptation/testing'
      },
    ]
  }),

  components: {
    PageHeader,
  }
}
</script>

<style scoped>
.adaptation {
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 20px 30px;
  height: calc(100vh - 180px - 20px);
  overflow-y: auto;
}
.adaptation__header {
  width: 100%;
  display: flex;
  margin-bottom: 15px;
}
.adaptation__navigation {
  background: #F1F0F9;
  border-radius: 7px;
  height: 50px;
  display: flex;
}
.adaptation__navigation-item {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  
}
.adaptation__navigation .adaptation__navigation-item:first-child {
  border-radius: 7px 0 0 7px;
}
.adaptation__navigation .adaptation__navigation-item:last-child {
  border-radius: 0px 7px 7px 0px;
}
.adaptation__navigation-item--active {
  background: #362EB6;
  color: white;
  transition: .5s all;
  border: 1px solid #362EB6;
}
.adaptation__navigation-item--passive {
  background: #F1F0F9;
  color: #747F8B;
  transition: .5s all;
  border: 1px solid #ddd;
}
.adaptation__body {

}
</style>