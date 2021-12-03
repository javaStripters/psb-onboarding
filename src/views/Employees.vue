<template>
  <div>
    <PageHeader text="Сотрудники"/>
    <div class="employees">
      <div class="employees__header">
        <div class="employees__quick-filters">
          <button 
            class="employees__quick-filter"
            :class="[selectedQuickFilterButtons.indexOf(button.name) !== -1 ? 'employees__quick-filter--active' : 'employees__quick-filter--passive']"
            v-for="(button, index) in quickFilterButtons"
            :key="index"
            @click="toggleButton(button.name)"
          >
            <div class="employees__quick-filter-number">{{button.number}}</div>
            <div class="employees__quick-filter-text">{{button.text}}</div>
          </button>
        </div>
        <div class="employees__advanced-filters">
          <div class="employees__advanced-filters-title">Фильтр по отделам</div>
          <div class="employees__advanced-filters-tags">
            <div class="employees__advanced-filters-tag">Отдел</div>
          </div>
        </div>
      </div>
      <div class="employees__body">
        <div class="employees__divisions">
          <div 
            class="employees__division"
            v-for="(division, index) in Object.keys(divisionsAndParticipates)"
            :key="index"
          >
            <div class="employees__division-name">{{division}}</div>
            <div class="employees__user-cards">
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
          class="employees__user-profile" 
          :user="choosedUser"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import UserCard from '../components/UserCard.vue'
import MiniProfile from '../components/MiniProfile.vue'
export default {
  data: () => ({
    quickFilterButtons: [
      {
        name: 'byProjects',
        text: 'По проектам',
        number: 1000,
      },
      {
        name: 'allEmployees',
        text: 'Все сотрудники',
        number: 1000,
      },
      {
        name: 'supportDivisions',
        text: 'Поддерж. подразд.',
        number: 1000,
      },
    ],
    selectedQuickFilterButtons: ['byProjects'],
    divisionsAndParticipates: {},
    choosedUser: ''
  }),
  methods: {
    toggleButton(id) {
      if (this.selectedQuickFilterButtons.indexOf(id) !== -1) {
        this.selectedQuickFilterButtons = this.selectedQuickFilterButtons.filter( item => item !== id)
      }
      else {
        this.selectedQuickFilterButtons.push(id)
      }
    },
    getParticipates() {
      fetch(`${this.$store.state.server}/projects/${1}/users`) /* Тут нужно получить список всех сотрудников */
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.divisionsAndParticipates = res
      })
    },
  },
  mounted() {
    this.getParticipates()
  },
  components: {
    PageHeader,
    UserCard,
    MiniProfile,
  }
}
</script>

<style scoped>
.employees {
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 20px 30px;
}
.employees__quick-filters {
  display: flex;
}

.employees__quick-filter {
  padding: 8px 20px;
  border: 1px solid #E3E5E8;
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.employees__quick-filter:first-child {
  border-radius: 20px 0px 0px 20px !important;
  padding-left: 25px;
}
.employees__quick-filter:last-child {
  border-radius: 0px 20px 20px 0px;
  padding-right: 25px;  
}
.employees__quick-filter--active {
  background: #FA4616;
  color: white;
  transition: .5s all;
}
.employees__quick-filter--passive {
  background: white;
  color: black;
  transition: .5s all;
}



.employees__body {
  display: grid;
  grid-template-columns: auto 250px;
}
.employees__divisions {
  padding: 18px 30px;
  display: flex;
  flex-direction: column;
  row-gap: 35px;
}
.employees__user-profile {
  background: #FAF7EF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 7px 0px 0px 7px;
  margin-top: 62px;
  height: 500px;
  position: sticky;
  top: 62px;
}
.employees__division-name {
  font-size: 18px;
  color: #29292F;
  font-weight: 600;
  margin-bottom: 18px;
}
.employees__user-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, auto));
  gap: 25px;
}
</style>