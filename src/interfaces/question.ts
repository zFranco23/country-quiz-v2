import { CountryCapital, CountryFlag, CountryName } from "./country";

export type QuestionType = 'flag' | 'capital';

export interface FlagQuestion {
    question: CountryFlag,
    answers: Array<CountryName>,
    answer: CountryName,
    type: QuestionType,
    userAnswer?: CountryName
}

export interface CapitalQuestion {
    question: CountryCapital,
    answers: Array<CountryName>,
    answer: CountryName,
    type: QuestionType
    userAnswer?: CountryName
}

export type Question = FlagQuestion | CapitalQuestion;