<template>
  <div class="team">
    <div class="team__division">
      <div class="team__division-name">Название отдела</div>
      <div class="team__user-cards">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  </div>
</template>


<script>
import UserCard from '../../components/UserCard.vue'
export default {
  
  components: {
    UserCard,
  }
}
</script>


<style scoped>
  .team {
    padding: 18px 30px;
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }
  .team__division-name {
    font-size: 18px;
    color: #29292F;
    font-weight: 600;
    margin-bottom: 18px;
  }
  .team__user-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
</style>