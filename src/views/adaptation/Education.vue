<template>
  <div class="education">
    <div class="education__card">
      <div class="education__card-header">
        <div class="education__card-title">Знакомство с банком</div>
        <button class="education__card-testing-btn">Пройти тестирование</button>
      </div>
      <div class="education__card-body">

        <div 
          class="edu-card"
          v-for="(card, index) in [...cards, ...cards, ...cards]"
          :key="index"
        >
          <div class="edu-card__header">
            <div class="edu-card__title">{{card.title}}</div>
            <div class="edu-card__status-icon">
              <img :src="card.isCompleted ? require('../../assets/checked-medal-green.svg') : require('../../assets/checked-medal-gray.svg')" alt="">
            </div>
            <div class="edu-card__tags">
              <div 
                class="edu-card__tag"
                :class="'edu-card__tag--' + index"
                v-for="(tag, index) in card.tags"
                :key="index"
              >
                {{tag}}
              </div>
            </div>
          </div>
          <div class="edu-card__body" style="height: 70px;"></div>
          <div class="edu-card__footer">
            <div 
              class="edu-card__footer-item"
              v-for="(item, index) in card.info"
              :key="index"
            >
              <div class="edu-card__footer-title">{{item.name}}</div>
              <div 
                class="edu-card__footer-value"
                :class="[card.isCompleted && 'edu-card__footer-value--achieved']"
                v-if="item.type === 'text'"
              >
                {{item.value}}
              </div>
              <div 
                class="edu-card__footer-progress-bar"
                v-else-if="item.type === 'progress-bar'"
              >
                heh
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="education__card">
      <div class="education__card-header">
        <div class="education__card-title">Знакомство с информационными технологиями</div>
        <button class="education__card-testing-btn">Пройти тестирование</button>
      </div>
      <div class="education__card-body">
        <div 
          class="edu-card"
          v-for="(card, index) in [...cards, ...cards, ...cards]"
          :key="index"
        >
          <div class="edu-card__header">
            <div class="edu-card__title">{{card.title}}</div>
            <div class="edu-card__status-icon">
              <img :src="card.isCompleted ? require('../../assets/checked-medal-green.svg') : require('../../assets/checked-medal-gray.svg')" alt="">
            </div>
            <div class="edu-card__tags">
              <div 
                class="edu-card__tag"
                :class="['edu-card__tag--' + index]"
                v-for="(tag, index) in card.tags"
                :key="index"
              >
                {{tag}}
              </div>
            </div>
          </div>
          <div class="edu-card__body" style="height: 70px;"></div>
          <div class="edu-card__footer">
            <div 
              class="edu-card__footer-item"
              v-for="(item, index) in card.info"
              :key="index"
            >
              <div class="edu-card__footer-title">{{item.name}}</div>
              <div 
                class="edu-card__footer-value"
                :class="[card.isCompleted && 'edu-card__footer-value--achieved']"
                v-if="item.type === 'text'"
              >
                {{item.value}}
              </div>
              <div 
                class="edu-card__footer-progress-bar"
                v-else-if="item.type === 'progress-bar'"
              >
                heh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'Что тебе доступно в банке?',
        isCompleted: false,
        tags: [
          'Обучение',
          'Знакомство с банком'
        ],
        info: [
          {
            type: 'progress-bar',
            name: 'Прогресс',
            all: 100,
            completed: 30,
          },
          {
            type: 'text',
            name: 'Время',
            value: '15 мин.'
          },
          {
            type: 'text',
            name: 'Опыт',
            value: '+15 exp.'
          },
        ]
      },
      {
        title: 'Что тебе доступно в банке?',
        isCompleted: true,
        tags: [
          'Обучение',
          'Знакомство с банком'
        ],
        info: [
          {
            type: 'progress-bar',
            name: 'Прогресс',
            all: 100,
            completed: 30,
          },
          {
            type: 'text',
            name: 'Время',
            value: '15 мин.'
          },
          {
            type: 'text',
            name: 'Опыт',
            value: '+15 exp.'
          },
        ]
      }
    ]
  })
}
</script>


<style scoped>
  .education {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
  .education__card {
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 24px 24px 24px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  .education__card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .education__card-title {
    color: #30353B;
    font-size: 26px;
    font-weight: 700;
  }
  .education__card-testing-btn {
    background: linear-gradient(115.13deg, #FA4616 0%, #FF7428 97.28%);
    border-radius: 40px;
    padding: 12px 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
  }
  .education__card-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 15px;
  }
  .edu-card {
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .edu-card__header {
    display: grid;
    grid-template-columns: auto 20px;
    gap: 8px;
  }
  .edu-card__title {
    font-size: 20px;
  }
  .edu-card__tags {
    grid-area: 2 / 1 / 3 / -1;
    display: flex;
    column-gap: 8px;
  }
  .edu-card__tag {
    padding: 0 8px;
    height: 16px;
    border-radius: 8px;
    font-size: 12px;
    background: #ddd;
    color: #bbb;
    line-height: 16px;
  }
  .edu-card__tag--0 {
    background: #FFFADC;
    color: #E19600;
  }
  .edu-card__tag--1 {
    color: #00B45A;
    background: #E1FFE6;;
  }
  .edu-card__footer {
    display: flex;
    justify-content: space-between;
  }
  .edu-card__footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .edu-card__footer-title {
    font-size: 14px;
  }
  .edu-card__footer-value {
    font-size: 14px;
    color: #747F8B;
  }
  .edu-card__footer-value--achieved {
    color: #00B45A;
  }
</style>