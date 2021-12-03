<template>
  <div style="width: 100%; background: #ffffff; box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);">
    <div class="header">
      <div class="header__icon">
        <img src="../assets/psb-logo.svg" alt="">
      </div>
      <div class="header__navigation navigation">
        <div 
          class="navigation__item"
          :class="[button.goTo.split('/')[2] === $route.path.split('/')[2] ? 'navigation__item--active' : 'navigation__item--passive']"
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
      <div class="header__profile-section">
        <div class="header__notificaton">
          <img src="../assets/bell.svg" alt="">
        </div>
        <div class="header__profile">
          
        </div>
        <div class="header__advanced-actions">
          <img src="../assets/chevron-down.svg" alt="">
        </div>
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
        goTo: '/authorized/home',
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
        goTo: '/authorized/projects',
      },
      {
        name: 'forum',
        text: 'Форум',
        goTo: '/authorized/forum',
      },
      {
        name: '',
        text: 'Адаптация',
        goTo: '/authorized/adaptation/general',
      },
      {
        name: 'employees',
        text: 'Сотрудники',
        goTo: '/authorized/employees',
      },
    ]
  })
}
</script>

<style scoped>
.header {
  max-width: 1200px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  column-gap: 50px;
}
.navigation {
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
.header__profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__profile {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #bbb;
  margin-right: 8px;
  margin-left: 18px;
}
</style>