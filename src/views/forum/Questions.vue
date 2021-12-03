<template>
  <div>
    <div class="stack-over-slow__main">
      <div class="stack-over-slow__header">
        <div class="stack-over-slow__title">
          Все вопросы
        </div>
        <div class="stack-over-slow__quick-filters">
          <button 
            class="stack-over-slow__quick-filter"
            :class="[choosedButton === button.name ? 'stack-over-slow__quick-filter--active' : 'stack-over-slow__quick-filter--passive']"
            v-for="(button, index) in quickFilterButtons"
            :key="index"
            @click="chooseButton(button.name)"
          >
            {{button.text}} 
          </button>
        </div>
        <button class="stack-over-slow__add-question-btn">
          <img src="../../assets/plus.svg" alt="">
          <div>Задать вопрос</div>
        </button>
      </div>
      <div class="stack-over-slow__questions">
        <div 
          class="stack-over-slow__question question"
          v-for="(question, index) in overSlows"
          :key="index"
          @click="openQuestionPage(question.id)"
        >
          <div class="question__uptitle">
            вчера 187 просмотров
          </div>
          <div class="question__title">
            {{question.name}}
          </div>
          <div class="question__tags">
            <div 
              class="question__tag"
              v-for="(tag, index) in question.tags"
              :key="index"
            >
              {{tag}}
            </div>
          </div>
          <div class="question__answers-number">
            <span>{{question.answers}}</span> <span>ответ</span>
          </div>
          <div 
            class="question__rating"
            :class="{
              'question__rating--neutral' : question.rating === 0,
              'question__rating--positive' : question.rating > 0, 
              'question__rating--negative' : question.rating < 0,
            }"
          >
            {{question.rating}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        name: 'no_answer'
      },
      {
        text: 'Закрытые',
        name: 'solved'
      },
    ],
    choosedButton: 'new',
    overSlows: []
  }), 
  methods: {
    chooseButton(id) {
      this.choosedButton = id
      this.getOverSlows()
    },
    getOverSlows() {
      fetch(this.$store.state.server + '/overslow/questions?sort=' + this.choosedButton.toUpperCase())
      .then(res => res.json())
      .then(res => {
        this.overSlows = res
        console.log(this.overSlows)
      })
    },
    openQuestionPage(id) {
      this.$router.push('/authorized/forum/question/' + id)
    }
  },
  mounted() {
    this.getOverSlows()
  },
}
</script>

<style scoped>
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
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.question {
  background: #FFFFFF;
  border: 1px solid #E3E5E8;
  box-sizing: border-box;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: auto 80px 80px;
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
  background: #FFFDF9;
  border: 1px solid #E3E5E8;
  border-radius: 4px;
  padding: 0px 10px;
  grid-area: 1 / 2 / 4 / 3;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  line-height: 1em;
}
.question__answers-number span:first-child {
  font-size: 20px;
}
.question__rating {
  border: 1px solid #E3E5E8;
  border-radius: 4px;
  grid-area: 1 / 3 / 4 / 4;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}
.question__rating--positive {
  background: #E1FFE6;
}
.question__rating--negative {
  background: #FFE6E6;
}
.question__rating--neutral {
  background: #FFFADC;
}
</style>