<template>
  <div class="architecture">
    <div class="architecture__header">
      <select 
        class="architecture__dropdown"
        v-model="diagram"
        style="padding-left: 10px"
      >
        <option 
          v-for="(diagram, index) in diagrams"
          :key="index"
          :value="diagram.path"
        >
        {{diagram.diagramType}}
        </option>
      </select>
      <div class="architecture__scale-btns">
        <button>
          <img src="../../assets/minus-in-circle.svg" alt="">
        </button>
        <div>50%</div>
        <button>
          <img src="../../assets/plus-in-circle.svg" alt="">
        </button>
      </div>
    </div>
    <div class="architecture__body">
      <img 
        class="architecture__diagram"
        :src="diagramPath" alt=""
      >
    </div>
    <div class="architecture__aside">
      <div style="color: #747F8B; font-weight: 700; margin-bottom: 5px">ОПИСАНИЕ ДИАГРАММЫ</div>
      {{diagrams.filter(dgm => dgm.path === diagram)[0].description}}
    </div>
  </div>
</template>

<script>
import Divider from '../../components/Divider.vue'
export default {
  props: [
    'project'
  ],
  data: () => ({
    isDropdown: false,
    diagrams: [],
    diagramPath: '',
    diagram: ''
  }),
  methods: {
  },
  watch: {
    project() {
      this.diagrams = this.project.diagrams
      console.log(this.diagrams)
    },
    diagram() {
      this.diagramPath = this.$store.state.server + '/files/' + this.diagram
    }
  },
  mounted() {
    this.diagrams = this.project.diagrams
    this.diagram = this.diagrams[0].path
  },
  components: {
    Divider,
  }
}
</script>

<style scoped>
.architecture {
  max-height: 100%;
  display: grid;
  grid-template-columns: auto 250px;
  grid-template-rows: 34px 90%;
  column-gap: 30px;
  row-gap: 16px;
}
.architecture__header {
  display: flex;
  justify-content: space-between;
  grid-area: 1 / 1 / 2 / 2;
}
.architecture__dropdown {
  width: 250px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #D5D9DC;
  height: 32px;
}
.architecture__dropdown-btn {
  height: 34px;
  background: #FFFFFF;
  border: 1px solid #D5D9DC;
  box-sizing: border-box;
  border-radius: 20px;
}
.architecture__dropdown-content {
  padding: 0px 10px 20px 10px;
  position: absolute;
  border: 1px solid black;
  width: 250px;
  display: flex;
  flex-direction: column;
}
.architecture__dropdown-content:focus {
  outline: none;
}
.architecture__scale-btns {
  background: #FFFFFF;
  border: 1px solid #D5D9DC;
  border-radius: 20px;
  padding: 4px;
  display: flex;
  column-gap: 15px;
  align-items: center;
}
.architecture__scale-btns button {
  height: 24px;
  display: flex;
  align-items: center;
}
.architecture__body {
  display: flex;
  justify-content: center;
  grid-area: 2 / 1 / 3 / 2;
  border: 1px solid #E3E5E8;
  border-radius: 4px;
  overflow: auto;
  padding: 5px;
}
.architecture__body img {

}
.architecture__diagram {
  max-width: 100%;
}
.architecture__aside {
  max-height: 100%;
  background: #F9F9F9;
  border: 1px solid #E3E5E8;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  grid-area: 1 / 2 / 3 / 3;
  padding: 8px 16px;
}
</style>