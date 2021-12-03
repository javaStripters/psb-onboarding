<template>
  <div>
      <PageHeader text="StackOverSlow"/>

  <div class="stack-over-slow">
    <div class="stack-over-slow__aside">
      <div class="stack-over-slow__aside-title">Вопросы</div>
      <div class="stack-over-slow__aside-text">Мои вопросы</div>
      <div class="stack-over-slow__aside-text">Популярные вопросы</div>
      <div class="stack-over-slow__aside-text">Вопросы в команде</div>
      <div class="stack-over-slow__aside-text">Вопросы по обучению</div>
      <div class="stack-over-slow__aside-title">Ответы</div>
      <div class="stack-over-slow__aside-text">Мои ответы</div>
      <div class="stack-over-slow__aside-title">Рейтинг</div>
      <div class="stack-over-slow__aside-text">Таблица лидеров</div>
      <Divider />
      <div 
        class="stack-over-slow__aside-dropdown-btn"
      >
        Кастомные теги
        <img src="../assets/chevron-down.svg" alt="">
      </div>
      <div 
        class="stack-over-slow__aside-dropdown-content"
        :class="openedDropdown === 'customTags' ? 'stack-over-slow__aside-dropdown-content--opened' : 'stack-over-slow__aside-dropdown-content--closed' "
      >
        heh
      </div>

      <Divider />
      <div 
        class="stack-over-slow__aside-dropdown-btn"
      >
        Игнорируемые теги
        <img src="../assets/chevron-down.svg" alt="">
      </div>
      <div 
        class="stack-over-slow__aside-dropdown-content"
        :class="openedDropdown === 'ingoringTags' ? 'stack-over-slow__aside-dropdown-content--opened' : 'stack-over-slow__aside-dropdown-content--closed' "
      >
        heh
      </div>
      <Divider />
      <div 
        class="stack-over-slow__aside-dropdown-btn"
        @click="openedDropdown = 'similarTags'"
      >
        Похожие теги
        <img src="../assets/chevron-down.svg" alt="">
      </div>
      <div 
        class="stack-over-slow__aside-dropdown-content"
        :class="openedDropdown === 'similarTags' ? 'stack-over-slow__aside-dropdown-content--opened' : 'stack-over-slow__aside-dropdown-content--closed' "
      >
        heh
      </div>
      <Divider />
    </div>
    <div class="stack-over-slow__main">
      <div class="stack-over-slow__header">
        <div class="stack-over-slow__title">
          Все вопросы
        </div>
        <div class="stack-over-slow__quick-filters">
          <button 
            class="stack-over-slow__quick-filter"
            :class="[selectedButtons.indexOf(button.name) !== -1 ? 'stack-over-slow__quick-filter--active' : 'stack-over-slow__quick-filter--passive']"
            v-for="(button, index) in quickFilterButtons"
            :key="index"
            @click="toggleButton(button.name)"
          >
            {{button.text}} 
          </button>
        </div>
        <button class="stack-over-slow__add-question-btn">
          <img src="../assets/plus.svg" alt="">
          <div>Задать вопрос</div>
        </button>
      </div>
      <div class="stack-over-slow__questions">
        <div class="stack-over-slow__question question">
          <div class="question__uptitle">
            вчера 187 просмотров
          </div>
          <div class="question__title">
            Название самого вопроса
          </div>
          <div class="question__tags">
            <div class="question__tag">
              Heh
            </div>
          </div>
          <div class="question__answers-number">
            0 <br/> ответ
          </div>
          <div class="question__rating">
            +7/-2
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import Divider from '../components/Divider.vue'
export default {
  data: () => ({
    quickFilterButtons: [
      {
        text: 'Новые',
        name: 'new'
      },
      {
        text: 'Активные',
        name: 'active'
      },
      {
        text: 'Без ответа',
        name: 'unanswered'
      },
      {
        text: 'Закрытые',
        name: 'closed'
      },
    ],
    selectedButtons: ['new'],
    openedDropdown: ''
  }), 
  methods: {
    toggleButton(id) {
      if (this.selectedButtons.indexOf(id) !== -1) {
        this.selectedButtons = this.selectedButtons.filter( item => item !== id)
      }
      else {
        this.selectedButtons.push(id)
      }
    }
  },
  components: {
    PageHeader,
    Divider,
  }
}
</script>


<style scoped>
.stack-over-slow {
  display: grid;
  grid-template-columns: 220px auto;
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  height: calc(100vh - 180px - 20px);
}
.stack-over-slow__aside {
  background: #DFDFE2;
  border-radius: 4px 0px 0px 4px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  overflow-y: auto;
}
.stack-over-slow__aside-title {
  color: #979A9D;
}
.stack-over-slow__aside-text {
  padding-left: 15px;
  color: #30353B;
}
.stack-over-slow__aside-dropdown-btn {
  display: flex;
  justify-content: space-between;
}
.stack-over-slow__aside-dropdown-content {}
.stack-over-slow__aside-dropdown-content--opened {
  height: auto;
}
.stack-over-slow__aside-dropdown-content--closed {
  height: 0;
  overflow-y: hidden;
}
.stack-over-slow__main {
  overflow-y: auto;
  padding: 20px 30px;
}
.stack-over-slow__header {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: auto minmax(160px, 170px);
  grid-template-rows: auto 40px;
  row-gap: 10px;
}
.stack-over-slow__title {
  grid-area: 1 / 1 / 2 / 3;
}
.stack-over-slow__quick-filters {
  display: flex;
}

.stack-over-slow__quick-filter {
  padding: 8px 20px;
  border: 1px solid #E3E5E8;
  display: flex;
  align-items: center;
}
.stack-over-slow__quick-filter:first-child {
  border-radius: 20px 0px 0px 20px !important;
  padding-left: 25px;
}
.stack-over-slow__quick-filter:last-child {
  border-radius: 0px 20px 20px 0px;
  padding-right: 25px;  
}
.stack-over-slow__quick-filter--active {
  background: #FA4616;
  color: white;
  transition: .5s all;
}
.stack-over-slow__quick-filter--passive {
  background: white;
  color: black;
  transition: .5s all;
}
.stack-over-slow__add-question-btn {
  background: linear-gradient(99.12deg, #2F2A85 24.54%, #4640AD 76.03%);
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  text-transform: uppercase;
  padding: 0px 20px;
  font-weight: 700;
}
.stack-over-slow__questions {
  overflow-y: auto;
}
.question {
  background: #FFFFFF;
  border: 1px solid #E3E5E8;
  box-sizing: border-box;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: auto 40px 40px;
  grid-template-rows: 20px 40px 20px;
  column-gap: 10px;
}
.question__uptitle {
  font-size: 14px;
  color: #979A9D;
  grid-area: 1 / 1 / 2 / 2;
}
.question__title {
  grid-area: 2 / 1 / 3 / 2; 
  font-size: 20px;
}

.question__tags {
  grid-area: 3 / 1 / 4 / 2;
  font-size: 12px;
  display: flex;
  column-gap: 5px;
}
.question__tag {
  padding: 2px 5px;
  font-size: 12px;
  background: #FFFADC;
  border-radius: 11px;
}
.question__answers-number {
  grid-area: 1 / 2 / 4 / 3;
  text-align: center;
  display: flex;
  align-items: center;
}
.question__rating {
  grid-area: 1 / 3 / 4 / 4;
  text-align: center;
  display: flex;
  align-items: center;
}

</style>