<template>
  <div class="team">
    <div class="team__divisions">
      <div 
        class="team__division"
        v-for="(division, index) in Object.keys(divisionsAndParticipates)"
        :key="index"
      >
        <div class="team__division-name">{{division}}</div>
        <div class="team__user-cards">
          <UserCard 
            v-for="(user, index) in divisionsAndParticipates[division]"
            :key="index"
            :fullName="user.fullName"
            :profession="user.profession"
            :emailAdress="user.contacts.emailAdress"
            :imgUrl="$store.state.server + '/files/' + user.avatar"
            :onClick="() => {choosedUser = user}"
          />
        </div>
      </div>
    </div>
    <MiniProfile 
      class="team__user-profile" 
      :user="choosedUser"
    />
  </div>
</template>


<script>
import UserCard from '../../components/UserCard.vue'
import MiniProfile from '../../components/MiniProfile.vue'
export default {
  data: () => ({
    divisionsAndParticipates: {},
    choosedUser: ''
  }),
  methods: {
    getParticipates() {
      fetch(`${this.$store.state.server}/projects/${this.$route.params.id}/users`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.divisionsAndParticipates = res
      })
    },
    showMoreInfo() {
      console.log('heh')
    }
  },
  mounted() {
    this.getParticipates()
  },
  components: {
    UserCard,
    MiniProfile,
  }
}
</script>


<style scoped>
  .team {
    display: grid;
    grid-template-columns: auto 250px;
    column-gap: 30px;
  }
  .team__divisions {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }
  .team__user-profile {
    background: #F5F6F7;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    margin-top: 45px;
    height: 500px;
    position: sticky;
    top: 62px;
  }
  .team__division-name {
    font-size: 18px;
    color: #29292F;
    font-weight: 600;
    margin-bottom: 18px;
  }
  .team__user-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, auto));
    gap: 25px;
  }
</style>