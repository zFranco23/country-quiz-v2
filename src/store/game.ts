import { defineStore } from "pinia"
import { ref, watchEffect } from "vue"
import { generateCapitalQuestion, generateFlaqQuestion } from "../utils/question"
import {  Question } from "../interfaces/question";
import { CountryName } from "../interfaces/country";


const shuffle = (array: Question[]) => {
    return array.sort(() => Math.random() - 0.5);
};

export const useGameStore = defineStore('game', () => {
    const questions = ref<Array<Question>>([]);
    const isGameEnded = ref<boolean>(false)
    const isGameStarted = ref<boolean>(false)
    

    const generateQuestions = async () => {
        try {

            const response = await fetch(import.meta.env.VITE_REST_COUNTRIES_API);
            const json = await  response.json()
    
            // Generate 5 questions per type
            const flagQuestions = [];
            const capitalQuestions = []
            for(let i=0; i< 5; i++){
                flagQuestions.push(generateFlaqQuestion(json))
                capitalQuestions.push(generateCapitalQuestion(json))
            }

            questions.value = shuffle([...capitalQuestions, ...flagQuestions]);
            isGameStarted.value = true;

        }catch(err){
            console.error(err);
        }
    
    }


    const answerQuestion = (index: number, answer: CountryName ) => {
        questions.value[index].userAnswer = answer;
    }

   
        watchEffect(() => {
            if (questions.value.length > 0 && questions.value.every(q => q.userAnswer)) {
                isGameEnded.value = true;
            }
        });


    const getCorrectAnswers = () => {
        let correct = 0;

        for(const question of questions.value){
            if(question.userAnswer?.common === question.answer.common) correct++;
                
        }

        return correct;
    }

    const resetGame = async () => {
        await generateQuestions();
        isGameEnded.value = false;
    }

    return { isGameEnded, isGameStarted, generateQuestions, questions, answerQuestion, getCorrectAnswers,resetGame }
})