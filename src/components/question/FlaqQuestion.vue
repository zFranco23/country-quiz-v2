
<script setup lang="ts">
import { computed } from 'vue';
import { CountryName } from '../../interfaces/country';
import { FlagQuestion } from '../../interfaces/question';
import { useGameStore } from '../../store/game';

const store = useGameStore();

const {question, index} = defineProps<{question: FlagQuestion, index: number}>()

const handleAnswerQuestion = (answer: CountryName) => {    
    store.answerQuestion(index, answer)
 }

 const isAnswered = computed(( ) => !!question.userAnswer)


</script>

<template>
    <div>
        <div>
            Which country does this flag <img :src="question.question.png" class="flag-img" /> belong to
        </div>

        <div class="answers">
            <button  type="button" :disabled="!!isAnswered" v-for="answer of question.answers" :key="answer.common" @click="handleAnswerQuestion(answer)">
                {{ answer.common }}
            </button>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .flag-img {
        width: 2rem;
    }

    .answers {
        display: grid;
        gap: 32px;

        @media(min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
        }
    }

</style>