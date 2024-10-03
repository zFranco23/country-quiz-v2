<script lang="ts" setup>
import congratsImg from '../assets/images/congrats.svg'
import { ref, watchEffect } from 'vue'
import { useGameStore } from '../store/game'
import { storeToRefs } from 'pinia'

const store = useGameStore()

const { questions } = storeToRefs(store)

const { getCorrectAnswers, resetGame } = store
const correctAnswers = ref<number>(0)

watchEffect(() => {
  correctAnswers.value = getCorrectAnswers()
})
</script>

<template>
  <div class="game-ended">
    <img :src="congratsImg" alt="" />
    <p class="title">Congrats, You completed the quiz.</p>

    <p class="subtitle">
      You answer {{ correctAnswers }} / {{ questions.length }} correctly.
    </p>

    <button class="reset-button" @click="resetGame">Play again</button>
  </div>
</template>

<style lang="scss" scoped>
.game-ended {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.title {
  font-size: 32px;
  color: white;
  text-align: center;
  margin: 0;
}

.subtitle {
  font-size: 16px;
  color: white;
}

.reset-button {
  cursor: pointer;
  border: none;
  padding: 16px;
  border-radius: 12px;
  color: white;
  font-weight: 500;
  background: linear-gradient(#e65895, #bc6be8);
  width: 10rem;
}
</style>
