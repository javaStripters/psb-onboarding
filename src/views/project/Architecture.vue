<template>
  <div class="architecture">
    <div class="architecture__header">
      <select 
        class="architecture__dropdown"
        v-model="diagram"
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
          <img src="" alt="">
        </button>
        <button>
          <img src="" alt="">
        </button>
      </div>
    </div>
    <Divider />
    <div class="architecture__body">
      <img 
        class="architecture__diagram"
        :src="diagramPath" alt=""
      >
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
  },
  components: {
    Divider,
  }
}
</script>

<style scoped>
.architecture {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
}
.architecture__dropdown {
  width: 250px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #D5D9DC;
  height: 32px;
}
.architecture__dropdown-btn {
  height: 32px;
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
.architecture__body {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: calc(100% - 300px);

}
.architecture__diagram {
  max-width: 100%;
}
</style>