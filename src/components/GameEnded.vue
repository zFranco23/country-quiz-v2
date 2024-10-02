<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useGameStore } from '../store/game';
import { storeToRefs } from 'pinia';

const store = useGameStore()

const {questions} = storeToRefs(store)


const {getCorrectAnswers, resetGame} = store
const correctAnswers = ref<number>(0);

watchEffect(() => {
    correctAnswers.value = getCorrectAnswers()
})
</script>

<template>
    <div>
        <p>Congrats, You completed the quiz</p>
        You answer {{ correctAnswers }} / {{ questions.length  }} correctly.

        <button @click="resetGame">
            Play again
        </button>
    </div>
  
</template>


<style>

</style>