<template>
  <div class="documentation">
    <div class="documentation__title">Documents from library</div>
    <ExpansionPanel 
      class="documentation__expansion-panel"
      :title="'Филиал'"
      :body="'Тут много полезного'"
    />
  </div>
</template>

<script>
import ExpansionPanel from '../../components/ExpansionPanel.vue'
export default {
 
 

 components: {
   ExpansionPanel
 }
}
</script>

<style scoped>
.documentation {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.documentation__title {
  font-size: 26px;
  font-weight: 700;
}
.documentation__expansion-panel {
  margin: 0px 2px;
}
</style>