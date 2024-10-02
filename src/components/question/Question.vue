<script setup lang="ts">
import { Question } from '../../interfaces/question';
import CapitalQuestion from './CapitalQuestion.vue';
import FlaqQuestion from './FlaqQuestion.vue';

defineProps<{question: Question, index: number}>()

</script>

<template>
    <div>
        <FlaqQuestion v-if="question.type === 'flag'" :question="question"  :index="index"/>
        <CapitalQuestion v-if="question.type === 'capital'" :question="question" :index="index" />
    </div>
</template>



<style scoped>

</style>