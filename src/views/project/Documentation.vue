<template>
  <div class="documentation">
    <div class="documentation__title">Документы из базы знаний</div>
    <ExpansionPanel 
      class="documentation__expansion-panel"
      title="Правила создания репозитория"
      body=" "
      emoji="💾"
    />
    <ExpansionPanel 
      class="documentation__expansion-panel"
      title="Правила оформления документов"
      body="true"
      emoji="📄"
    />
    <div class="documentation__title">Прикрепленные документы</div>
    <div class="documentation__items">
      <div 
        class="documentation__item"
        v-for="(doc, index) in docs"
        :key="index"
      >
        <img class="documentation__doc-icon" :src="require(`../../assets/${doc.icon}-file.svg`)">
        <div class="documentation__doc-name">{{doc.name}}</div>
        <div class="documentation__doc-size">{{doc.size}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ExpansionPanel from '../../components/ExpansionPanel.vue'
export default {
  data: () => ({
    docs: [
      {
        icon: 'pdf',
        name: 'Регламент КРКБ',
        size: '3.5 Мб'
      },
      {
        icon: 'mkv',
        name: 'Регламент КРКБ',
        size: '251.3 Мб'
      },
      {
        icon: 'pdf',
        name: 'Решенческое интервью 2021.10.13',
        size: '0.8 Мб'
      },
      {
        icon: 'pdf',
        name: 'Roadmap',
        size: '14.8 Мб'
      },
      {
        icon: 'pdf',
        name: 'Unit-экономика',
        size: '1.2 Mб'
      },
    ]
  }),
 

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
.documentation__items {
  display: flex;
  align-items: baseline;
  column-gap: 20px;
}
.documentation__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.documentation__doc-icon {
  height: 60px;
}
.documentation__doc-name {
  max-width: 150px;
  text-align: center;
  height: 48px;
  display: flex;
  align-items: center;
}
.documentation__doc-size {
  font-size: 12px;
  color: #747F8B;
}
</style>