<script setup lang="ts">
import {
  CapitalQuestion as CapitalQuestionType,
  FlagQuestion as FlaqQuestionType,
  Question,
} from '../../interfaces/question'
import CapitalQuestion from './CapitalQuestion.vue'
import FlaqQuestion from './FlaqQuestion.vue'

defineProps<{ question: Question; index: number }>()
</script>

<template>
  <div>
    <FlaqQuestion
      v-if="question.type === 'flag'"
      :question="question as FlaqQuestionType"
      :index="index"
    />
    <CapitalQuestion
      v-if="question.type === 'capital'"
      :question="question as CapitalQuestionType"
      :index="index"
    />
  </div>
</template>

<style scoped></style>
