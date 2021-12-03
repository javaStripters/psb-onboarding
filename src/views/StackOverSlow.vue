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
      <router-link to="/authorized/forum/leaders" class="stack-over-slow__aside-text">Таблица лидеров</router-link>
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
    <router-view class="stack-over-slow__main"></router-view>
  </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import Divider from '../components/Divider.vue'
export default {
  data: () => ({
    openedDropdown: '',

  }),
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


</style>