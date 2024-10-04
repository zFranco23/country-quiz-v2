<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'
import { ref } from 'vue'
import BaseQuestion from './question/BaseQuestion.vue'

const questionSelectedIndex = ref(0)

const store = useGameStore()
const { questions } = storeToRefs(store)
</script>

<template>
  <div>
    <h1 class="title">Country quiz</h1>

    <div class="questions__list">
      <button
        v-for="(question, idx) of questions"
        :key="'question-' + idx"
        @click="questionSelectedIndex = idx"
        class="question"
        :class="{ 'answered-question': !!question.userAnswer }"
      >
        {{ idx + 1 }}
      </button>
    </div>

    <BaseQuestion
      :question="questions[questionSelectedIndex]"
      :index="questionSelectedIndex"
    />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 14px;
  font-weight: 500;
  color: #8b8eab;
  text-align: center;
  margin-bottom: 16px;
}

.questions__list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.question {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #343964;
  color: white;
  font-weight: 500;
  font-family: BeVietnamPro;
}

.answered-question {
  background: linear-gradient(#e65895, #bc6be8);
}
</style>
