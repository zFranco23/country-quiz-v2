<template>
  <div class="background">
    <div class="content">
      <CountryGameVue />
    </div>
  </div>
</template>

<script setup>
import CountryGameVue from "./components/CountryGame.vue";
</script>

<style lang="scss" scoped>
  .background {
    background-image: url(/src/assets/images/bg.jpg);
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
</style>