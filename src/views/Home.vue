<template>
  <div>
    <PageHeader 
      text="Главная"
    />
    <div class="home">
      <div class="home__card home__banner">
        <div class="home__banner-title">Добро пожаловать в ПСБ | HELP</div>
        <div class="home__button--primary">ОЗНАКОМИТЬСЯ С ПРИЛОЖЕНИЕМ</div>
        <div class="home__button--secondary">ПРОПУСТИТЬ ОБУЧЕНИЕ</div>
        <div class="home__banner-image">
          <img src="../assets/scholar.svg" alt="">
        </div>
      </div>
      <div class="home__card">
        <div class="home__card-body">
          <div class="complex-card">
            <div class="complex-card__header">
              <div class="complex-card__title">Проекты</div>
              <router-link class="complex-card__more-btn" to="/authorized/projects">
                <div>Смотреть все</div>
                <img src="../assets/chevron-right.svg" alt="">
              </router-link>
            </div>
            <div class="complex-card__body complex-card__body--horizontal-scroll">
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
          </div>
          <div class="complex-card"></div>
          <div class="complex-card forum">
            <div class="complex-card__header">
              <div class="complex-card__title">Форум</div>
              <router-link class="complex-card__more-btn" to="/authorized/forum">
                <div>Смотреть все</div>
                <img src="../assets/chevron-right.svg" alt="">
              </router-link>
            </div>
            <div class="complex-card__body">
              <div class="stack-over-slow__questions">
                <div 
                  class="stack-over-slow__question question"
                  v-for="(question, index) in overSlows"
                  :key="index"
                  @click="openQuestionPage(question.id)"
                >
                  <div class="question__uptitle">
                    <div class="question__uptitle-item">
                      <img class="question__uptitle-icon" src="../assets/calendar.svg"/>
                      <div class="question-uptile-text">Вчера</div>
                    </div>
                    <div class="question__uptitle-item">
                      <img class="question__uptitle-icon" src="../assets/eye.svg"/>
                      <div class="question-uptile-text">4 просмотра</div>
                    </div>
                    <div class="question__uptitle-item">
                      <img class="question__uptitle-icon" src="../assets/man.svg"/>
                      <div class="question-uptile-text"> {{index == 0 ? 'Joly Lee' : 'Argend Carper'}} Li</div>
                    </div>
                  </div>
                  <div class="question__title">
                    {{question.name}}
                  </div>
                  <div class="question__description">
                    {{question.content}}
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
                  <!-- <div class="question__answers-number">
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
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import Card from '../components/Card.vue'
export default {
  data: () => ({
    projectsTiles: [],
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
    overSlows: [],
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
    this.getProjects()
    this.getOverSlows()

  },
  components: {
    PageHeader,
    Card,
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
  .home__card {
    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 20px 30px;
  }
  .home__banner {
    padding: 0;
    padding-left: 50px;
    display: grid;
    grid-template-columns: 2fr 1fr min-content;
    column-gap: 30px;
  }
  .home__banner-title {
    grid-area: 1 / 1 / 2 / 3;
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
  }
  .home__button--primary {
    font-size: 20px;
    background: linear-gradient(115.13deg, #FA4616 0%, #FF7428 97.28%);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
  }
  .home__button--secondary {
    border: 1px solid #FA4616;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    
  }
  .home__banner-image {
    grid-area: 1 / 3 / 3 / 4;
    height: 172px;
  }
  .home__card-body {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 30px;
  }


  .complex-card {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
  }
  .complex-card__header {
    display: flex;
    justify-content: space-between;
  }
  .complex-card__title {
    font-size: 20px;
  }
  .complex-card__more-btn {
    display: flex;
    align-items: center;
    column-gap: 10px;
    color: #979A9D;
  }
  .complex-card__body {
    background: #F9F9F9;
    border: 1px solid #E3E5E8;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    padding: 10px;

  }
  .complex-card__body--horizontal-scroll {
    overflow-x: auto;
    display: flex;
    column-gap: 10px;
  }

  .forum {
    grid-area: 1 / 2 / 3 / 3;
    height: 100%;
  }




































  .project-tile {
    cursor: pointer;
    min-width: 250px;
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
  grid-template-columns: auto ;
  grid-template-rows: 20px 40px auto 20px;
  column-gap: 10px;
}
.question__uptitle {
  font-size: 14px;
  color: #979A9D;
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  column-gap: 15px;
  align-items: center;
}
.question__uptitle-item {
  display: flex;
  column-gap: 5px;
  align-items: center;
}
.question__title {
  grid-area: 2 / 1 / 3 / 2; 
  font-size: 20px;
}
.question__description {
  grid-area: 3 / 1 / 4 / 2;
  height: 100%;
}
.question__tags {
  grid-area: 4 / 1 / 5 / 2;
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
  max-height: 50px;
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
  max-height: 50px;
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