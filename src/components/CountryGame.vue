<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'
import GameStarted from './GameStarted.vue'
import GameEnded from './GameEnded.vue'
import { watchEffect } from 'vue'

const store = useGameStore()
const { isGameEnded, isGameStarted } = storeToRefs(store)

watchEffect(() => {
  store.generateQuestions()
})
</script>

<template>
  <div class="center-background">
    <div class="container">
      <GameStarted v-if="isGameStarted && !isGameEnded" />
      <GameEnded v-if="isGameEnded" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center-background {
  background-color: #393f6e;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  border-radius: 12px;

  @media (min-width: 768px) {
    max-width: 1136px;
  }
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 16px;

  @media (min-width: 768px) {
    max-width: 70%;
    padding: 64px;
  }
}
</style>
