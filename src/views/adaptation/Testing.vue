<template>
  <div class="testing">
    <div class="testing__card">
      <div class="testing__test-tiles">
        <div 
          class="testing__test-tile test-tile"
          v-for="(tile, index) in testsTiles"
          :key="index"
        >
          <div class="test-tile__header">
            <div class="test-tile__title">{{tile.title}}</div>
            <div class="test-tile__status">
              <img :src="tile.isCompleted ? require('../../assets/checked-medal-green.svg') : require('../../assets/checked-medal-gray.svg')" alt="">
            </div>
            <div 
              class="test-tile__result"
              :class="'test-tile__result--' + tile.result.status"
            >
              Результат: {{tile.result.got}}/{{tile.result.max}} ({{tile.result.message}})
            </div>
          </div>
          <div class="test-tile__body">
            <div class="test-tile__info-items">
              <div 
                class="test-tile__info-item"
                v-for="(item, index) in tile.info"
                :key="index"
              >
                <div class="test-file__info-item-title">{{item.name}}</div>
                <div class="test-file__info-item-value">{{item.value}}</div>
              </div>
            </div>
            <button class="test-tile__pass-test-btn">Пройти тестирование</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    testsTiles: [
      {
        title: 'Знакомство с Банком',
        isCompleted: true,
        result: {
          max: 35,
          got: 25,
          status: 'good',
          message: 'Хорошо'
        },
        info: [
          {
            name: 'Количество вопросов:',
            value: '35 вопросов'
          },
          {
            name: 'Приблизительное время:',
            value: '15 минут'
          }
          ,{
            name: 'Опыт:',
            value: '+ 150 exp.'
          },
        ]
      },
      {
        title: 'Знакомство с блоком информационных технологий',
        isCompleted: false,
        result: {
          max: 35,
          got: 5,
          status: 'bad',
          message: 'Неудовлетворительно'
        },
        info: [
          {
            name: 'Количество вопросов:',
            value: '35 вопросов'
          },
          {
            name: 'Приблизительное время:',
            value: '15 минут'
          }
          ,{
            name: 'Опыт:',
            value: '+ 150 exp.'
          },
        ]
      },
      {
        title: 'Знакомство с блоком информационных технологий',
        isCompleted: true,
        result: {
          max: 35,
          got: 30,
          status: 'excellent',
          message: 'Отлично'
        },
        info: [
          {
            name: 'Количество вопросов:',
            value: '35 вопросов'
          },
          {
            name: 'Приблизительное время:',
            value: '15 минут'
          }
          ,{
            name: 'Опыт:',
            value: '+ 150 exp.'
          },
        ]
      }
    ]
  }),
}
</script>

<style scoped>
.testing__card {
  padding: 24px 30px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.testing__test-tiles {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.test-tile {
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
}
.test-tile__header {
  display: grid;
  grid-template-columns: 1fr 24px auto;
  align-items: center;
}
.test-tile__title {
  font-size: 26px;
  font-weight: 700;
}
.test-tile__result--bad {
  color: #FF1A1A;
}
.test-tile__result--good {
  color: #E19600;
}
.test-tile__result--excellent {
  color: #00B45A;
}
.test-tile__body {
  display: flex;
  justify-content: space-between;
  row-gap: 24px;
}
.test-tile__info-items {
  display: flex;
  column-gap: 24px;
}
.test-tile__info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.test-tile__info-value {
  color: #747F8B;
  font-size: 14px;
}
.test-tile__pass-test-btn {
  background: linear-gradient(115.13deg, #FA4616 0%, #FF7428 97.28%);
  border-radius: 40px;
  padding: 12px 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
}
</style>