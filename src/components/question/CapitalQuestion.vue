
<script setup lang="ts">
import { computed } from 'vue';
import { CountryName } from '../../interfaces/country';
import { CapitalQuestion } from '../../interfaces/question';
import { useGameStore } from '../../store/game';

const store = useGameStore();
const {question, index} = defineProps<{question: CapitalQuestion, index: number}>()

 
 const handleAnswerQuestion = (answer: CountryName) => {    
    store.answerQuestion(index, answer)
 }


 const isAnswered = computed(( ) => !!question.userAnswer)


const getIsValidFlag = (currentAnswer: CountryName) => {
    const userAnswer = question.userAnswer;
    return currentAnswer.common === userAnswer?.common && userAnswer.common === question.answer.common  ? 'correct' : 'incorrect';
}

</script>

<template>
    <div>
        <p>Which country is {{ question.question[0] }} the capital?</p>

        <div class="answers">

            <button type="button" :disabled="isAnswered"  v-for="answer of question.answers" :key="answer.common" @click="handleAnswerQuestion(answer)">
                {{ answer.common }} {{ isAnswered ? getIsValidFlag(answer): undefined }}
            </button>
        </div>
    </div>
</template>


<style scoped lang="scss">


.answers {
        display: grid;
        gap: 32px;

        @media(min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
        }
    }

</style>