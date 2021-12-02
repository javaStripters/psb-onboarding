<template>
  <div class="home">
    <Card 
      class="home__item--md"
      :title="'Medium'"
    >
      <div class="card__divider"></div>
      Дивайдер выше и ниже. Плодить могу в любой части текста
      <div class="card__divider"></div>
    </Card>
    <Card class="home__item--md"> 
      И без дивайдеров умею
    </Card>
    <Card class="home__item--sm" title="Small card"/>
    <Card class="home__item--lg" title="Large card"/>
    <Card class="home__item--xl" title="Extra large card"> Вот он настоящий пельмень: внутри много-много мяса, мало-мало теста</Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  
  components: {
    Card,
  }
}
</script>

<style scoped>
  .home {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
    padding: 30px 0;
    grid-auto-flow: row;
  }

  .home__item--sm {
    grid-column-end: span 3;
  }
  .home__item--md {
    grid-column-end: span 6;
  }
  .home__item--lg {
    grid-column-end: span 9;
  }
  .home__item--xl {
    grid-column-end: span 12;
  }
</style>