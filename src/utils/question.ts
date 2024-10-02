import type { Country } from "../interfaces/country"
import type { CapitalQuestion, FlagQuestion } from "../interfaces/question";

const MAX_ANSWERS = 4;


export const generateFlaqQuestion = (countries: Array<Country>): FlagQuestion => {
    const answerIndex = Math.round(Math.random()* (MAX_ANSWERS - 1));    

    let answer;
    let question;
    let answers = [];
    
    for(let i = 0; i < MAX_ANSWERS; i++){
        const randomIndex = Math.round(Math.random()*(countries.length-1));
        if(i === answerIndex) {
            question = countries[randomIndex].flags
            answer = countries[randomIndex].name
        }
        answers.push(countries[randomIndex].name);
    }   

    return {type:'flag', answer: answer!, question: question!, answers}
}


export const generateCapitalQuestion = (countries: Array<Country>): CapitalQuestion => {
    const answerIndex = Math.round(Math.random()* (MAX_ANSWERS - 1));    

    let answer;
    let question;
    let answers = [];
    
    for(let i = 0; i < MAX_ANSWERS; i++){
        const randomIndex = Math.round(Math.random()*(countries.length-1));
        if(i === answerIndex) {            
            question = countries[randomIndex].capital
            answer = countries[randomIndex].name
        }
        answers.push(countries[randomIndex].name);
    }   

    return {type:'capital' ,answer: answer!, question: question!, answers}  
}