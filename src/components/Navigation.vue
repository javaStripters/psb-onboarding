<template>
  <div class="header">
    <div class="header__icon">
      <img src="" alt="">
    </div>
    <div class="header__navigation navigation">
      <div 
        class="navigation__item"
        :class="[button.goTo === $route.path.split('/')[2] ? 'navigation__item--active' : 'navigation__item--passive']"
        v-for="(button, index) in buttons"
        :key="index"
      >
        <router-link 
          class="navigation__link"
          :to="button.goTo"
        >
          {{button.text}}
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    // 'buttons'
  ],
  data: () => ({
    buttons: [
      {
        name: 'home',
        text: 'Главная',
        goTo: 'home',
        children: [
          {
            name: '',
            text: '',
            goTo: '',
          },
          {
            name: '',
            text: '',
            goTo: '',
          }
        ],
      },
      {
        name: 'projects',
        text: 'Проекты',
        goTo: 'projects',
      },
      {
        name: 'forum',
        text: 'Форум',
        goTo: 'forum',
      },
      {
        name: '',
        text: 'База знаний',
        goTo: '',
      },
      {
        name: '',
        text: 'Сотрудники',
        goTo: '',
      },
    ]
  })
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 90px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
}
.navigation {
  width: 100%;
  display: flex;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  text-transform: uppercase;
  height: 100%;
  align-items: center;
}
.navigation__item {
  height: 100%;
  display: flex;
  align-items: center;
}
.navigation__link {
  color: #747F8B;
  height: 100%;
  display: flex;
  align-items: center;
  transition: .3s all;
}
.navigation__item--active {
  height: 100%;
  border-bottom: 2px solid #FA4616;
  transition: .3s all;
}
.navigation__item--passive {
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: .3s all;
}
.navigation__item--active a {
  color: #30353B;
  transition: .3s all;
}
 
</style>