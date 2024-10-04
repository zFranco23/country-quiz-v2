<script setup lang="ts">
import { computed } from 'vue'
import { CountryName } from '../../interfaces/country'
import {
  CapitalQuestion,
  FlagQuestion,
  Question,
} from '../../interfaces/question'
import { useGameStore } from '../../store/game'
import AnswerStatusIcon from './AnswerStatusIcon.vue'

const { index, question } = defineProps<{
  question: Question
  index: number
}>()

const store = useGameStore()
const handleAnswerQuestion = (answer: CountryName) => {
  store.answerQuestion(index, answer)
}

const isAnswered = computed(() => !!question.userAnswer)

const getIsValidFlag = (currentAnswer: CountryName) => {
  const userAnswer = question.userAnswer
  return currentAnswer.common === userAnswer?.common &&
    userAnswer.common === question.answer.common
    ? 'correct'
    : 'incorrect'
}
</script>
<template>
  <div>
    <div>
      <div class="title" v-if="question.type === 'flag'">
        Which country does this flag
        <img :src="(question as FlagQuestion).question.png" class="flag-img" />
        belong to
      </div>

      <div v-else class="title">
        Which country is {{ (question as CapitalQuestion).question[0] }} the
        capital?
      </div>

      <div class="answers">
        <button
          class="answer"
          type="button"
          :disabled="!!isAnswered"
          v-for="answer of question.answers"
          :key="answer.common"
          @click="handleAnswerQuestion(answer)"
          :class="{
            'current-answer': question.userAnswer?.common === answer.common,
          }"
        >
          {{ answer.common }}

          <div v-if="!!question.userAnswer">
            <AnswerStatusIcon
              v-if="question.userAnswer.common === answer.common"
              :status="getIsValidFlag(answer)"
            />
            <AnswerStatusIcon
              v-else-if="question.answer.common === answer.common"
              status="correct"
            />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flag-img {
  width: 2rem;
}
.title {
  text-align: center;
  color: white;
  font-size: 32px;
  margin: 32px 0;
}

.answers {
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.answer {
  cursor: pointer;
  border: none;
  border-radius: 12px;
  padding: 16px;
  background-color: #343964;
  font-weight: 500;
  color: white;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  &:hover:not([disabled]),
  &.current-answer {
    background: linear-gradient(#e65895, #bc6be8);
  }
}
</style>
