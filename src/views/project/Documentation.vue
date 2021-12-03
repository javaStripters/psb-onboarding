<template>
  <div class="documentation">
    <div class="documentation__title">Documents from library</div>
    <ExpansionPanel 
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
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.documentation__title {
  font-size: 26px;
  font-weight: 700;
}
</style>