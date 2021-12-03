<template>
  <div class="adaptation-general">
    <div class="adaptation-general__main">
      <div class="adaptation-general__lg-card adaptation-general__card">
        <div class="adaptation-general__card-title">Мой прогресс</div>
        <div class="adaptation-general__card-body">
          <img src="../../assets/user-progress.svg" alt="">
        </div>
      </div>
      <div class="adaptation-general__md-card adaptation-general__card">
        <div class="adaptation-general__card-title">Мой задачи</div>
        <div class="adaptation-general__card-body adaptation-general__tasks">
          <div 
            class="adaptation-general__task"
            v-for="(tile, index) in tasksTiles"
            :key="index"
          >
            <div 
              class="adaptation-general__checkbox"
              @click="() => {tile.isCompleted = !tile.isCompleted}"
            >
              <img :src="tile.isCompleted ? require('../../assets/marked-checkbox.svg') : require('../../assets/empty-checkbox.svg')" alt="">
            </div>
            <div class="adaptation-general__text">{{tile.text}}</div>
            <div class="adaptation-general__icon"><img src="" alt=""></div>
          </div>
        </div>
      </div>
      <div 
        class="adaptation-general__md-card adaptation-general__card">
        <div class="adaptation-general__card-title">Моя статистика</div>
        <div class="adaptation-general__card-body adaptation-general__statistic-items">
          <div 
            class="adaptation-general__statistic-item"
            v-for="(item, index) in statisticItems"
            :key="index"
          >
            <div class="adaptation-general__statistic-item-count">
              <div class="adaptation-general__statistic-item-completed">{{item.completed}}</div>
              <div class="adaptation-general__statistic-item-all">из {{item.all}}</div>
            </div>
            <div class="adaptation-general__statistic-item-title">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="adaptation-general__aside">
      <MiniProfile 
        class="adaptation-general__mentor"
      />
    </div>
  </div>
</template>

<script>
import MiniProfile from '../../components/MiniProfile.vue'
export default {
  data: () => ({
    tasksTiles: [
      {
        isCompleted: false,
        text: 'Завести заявку на подготовку рабочего места',
        isExpansion: true
      },
      {
        isCompleted: true,
        text: 'Завести заявку на подготовку рабочего места',
        isExpansion: true
      },
      {
        isCompleted: false,
        text: 'Завести заявку на подготовку рабочего места',
        isExpansion: true
      },
    ],
    statisticItems: [
      {
        completed: 5,
        all: 104,
        title: 'Прочитано материалов'
      },
      {
        completed: 2,
        all: 26,
        title: 'Решено тестов'
      },
      {
        completed: 1,
        all: 16,
        title: 'Пройдено испытаний'
      },
    ]
  }),
  components: {
    MiniProfile,
  }
}
</script>

<style scoped>
.adaptation-general {
  display: grid;
  grid-template-columns: 1fr 250px;
  column-gap: 30px;
  row-gap: 15px;
}
.adaptation-general__main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, auto);
  row-gap: 30px;
  column-gap: 15px;

}
.adaptation-general__card {
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 24px;
}
.adaptation-general__card-title {
  color: #30353B;
  font-size: 26px;
  font-weight: 700;
}
.adaptation-general__card-body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.adaptation-general__card-body img {
  width: 100%;
}
.adaptation-general__lg-card {
  grid-column-end: span 2;
}
.adaptation-general__md-card {
  grid-column-end: span 1;
}
.adaptation-general__aside {
}
.adaptation-general__tasks {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.adaptation-general__task {
  width: calc(100% + 16px + 16px);
  position: relative;
  display: flex;
  background: #F5F6F7;
  border-radius: 4px;
  padding: 16px 22px;
  align-items: center;
  column-gap: 8px;
}
.adaptation-general__checkbox {
  display: flex;
  align-items: center;

}
.adaptation-general__mentor {
  background: #F5F6F7;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  height: 500px;
  position: sticky;
  top: 62px;
}

.adaptation-general__statistic-items {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.adaptation-general__statistic-item {
  display: flex;
  column-gap: 15px;
  align-items: center;
  width: 100%;
}
.adaptation-general__statistic-item-count {
  width: 100px;
  height: 38px;
  display: flex;
  background: #F2F2F2;
  border-radius: 2px;
  padding: 4px 9px;
  column-gap: 10px;
  align-items: center;
}
.adaptation-general__statistic-item-completed {
  font-size: 26px;
  color: #FA4616;
}
.adaptation-general__statistic-item-all {
}
</style>