
<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '../store/game';
import Question from './question/Question.vue';
import { ref } from 'vue';

const questionSelectedIndex = ref(0);

    const store = useGameStore()
    const {questions} = storeToRefs(store)

</script>

<template>
    <div>
        <h1>
            Country quiz
        </h1>

        <button v-for="(question, idx) of questions" :key="question.question" @click="questionSelectedIndex = idx">
           {{  idx + 1 }} 
        </button>

        <Question :question="questions[questionSelectedIndex]" :index="questionSelectedIndex" />
    </div>
</template>

<style lang="scss" scoped>

</style>