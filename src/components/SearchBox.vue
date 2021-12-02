<template>
  <div class="search-box">
    <input class="search-box__input" />
    <div class="search-box__clear-btn">
      <button>
        <img src="../assets/x-mark.svg" alt="">
      </button>
    </div>
    <div class="search-box__search-btn">
      <button>
        <img src="../assets/magnifier.svg" alt="">
      </button>
    </div>

  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.search-box {
  height: 40px;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 20px;
  min-width: 100px;
  max-width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-box__input {
  border: 1px solid var(--description_text_primary);
  border-radius: 20px 0 0 20px;
  padding: 0 0 0 20px;
  height: 100%;
  width: 300px;
}
.search-box__clear-btn {
  position: relative;
  width: 0;
  right: 37px;
}
.search-box__clear-btn button {
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.search-box__search-btn {
  background: linear-gradient(115.13deg, #FA4616 0%, #FF7428 97.28%);
  min-width: 50px;
  border-radius: 0 20px 20px 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
}
</style>