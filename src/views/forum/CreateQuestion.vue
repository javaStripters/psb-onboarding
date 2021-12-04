<template>
  <div class="ask">
    <div class="ask__header">
      <router-link to="/authorized/forum" class="ask__go-back">
        <img src="../../assets/arrow-left.svg" alt="">
        <div>Вернутьcя назад</div>
      </router-link>
      <div class="ask__title">Задать вопрос</div>
    </div>
    <div class="ask__body">

      <div class="ask__form">
        <div class="ask__form-item ask__form-item--big">
          <div class="ask__form-label">Заголовок</div>
          <input 
            type="text" 
            class="ask__form-input"
            placeholder="В чем заключается Вам вопрос?"
            v-model="form.title"
          >
        </div>
        <div class="ask__form-item ask__form-item--big">
          <div class="ask__form-label">Основной текст</div>
          <textarea 
            type="text" 
            class="ask__form-input"
            placeholder="Подробно опишите Вашу проблему."
            v-model="form.description"
          />
        </div>
        <div class="ask__form-item">
          <div class="ask__form-label">Ссылки</div>
          <input 
            type="text" 
            class="ask__form-input"
            placeholder="Перечислите ссылки через запятую"
            v-model="form.links"
          >
        </div>
        <div class="ask__form-item">
          <div class="ask__form-label">Теги</div>
          <input 
            type="text" 
            class="ask__form-input"
            placeholder="Перечислите теги через запятую"
            v-model="form.tags"
          >
        </div>
      </div>

      <button @click="sendQuestionToServer()" class="ask__submit-btn">ОПУБЛИКОВАТЬ ВОПРОС</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      title: 'Будет ли работать из веб-морды?',
      description: 'Сервер ругается на отправку лишь имени и контента. На свагере у меня получилось избежать ошибки указав айди проекта и пользователя. Проверял, указывать либо только айди автора или только айди проекта ни к чему хорошему не приводило.',
      links: '',
      tags: 'backend, sophisticated, want to sleep, iternal error',
    },
  }),
  methods: {
    sendQuestionToServer() {
      fetch(this.$store.state.server + '/overslow/questions', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify({
          "id": 0,
          "rating": 0,
          "answers": 0,
          "createdAt": "2021-12-04T04:17:12.265Z",
          projectId: 1,
          authorId: 1,
          name: this.form.title,
          content: this.form.description,
          tags: this.form.tags.split(',')
        })
      })
    }
  }
}
</script>

<style scoped>
.ask {
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 20px 30px;
}
.ask__header {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 20px;
}
.ask__go-back {
  display: flex;
  font-size: 16px;
  color: #979A9D;
  column-gap: 15px;
}
.ask__title {
  font-size: 20px;
}
.ask__body {
  display: flex;
  flex-direction: column;
}
.ask__form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 15px;
  column-gap: 30px;
  margin-bottom: 30px;
}
.ask__form-item {
  width: 100%;
}
.ask__form-item--big {
  grid-column: 1 / -1;
}
.ask__form-input {
  width: 100%;
  background: #F9F9F9;
  border: 1px solid #E3E5E8;
  box-sizing: border-box;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  min-height: 50px;
  padding: 5px;
}
.ask__submit-btn {
  background: linear-gradient(115.13deg, #FA4616 0%, #FF7428 97.28%);
  border-radius: 40px;
  height: 40px;
  padding: 0px 20px;
  color: white;
  margin-left: auto;
}


</style>