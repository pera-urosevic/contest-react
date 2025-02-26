import { proxy } from 'valtio/vanilla'
import { deepClone } from 'valtio/utils'
import type { Question } from '../types/question'

export type QuizState = {
  questions?: Question[]
  question?: Question
  choices: number[]
  reveal: boolean
  score: number | null
}

export const initialState: QuizState = {
  questions: undefined,
  question: undefined,
  choices: [],
  reveal: false,
  score: null,
}

export const quizStore = proxy<QuizState>(deepClone(initialState))

