import { proxy } from 'valtio/vanilla'
import { deepClone } from 'valtio/utils'
import type { Question } from '../types/question'

export type QuizState = {
  questions?: Question[]
  question?: Question
  choices: number[]
  reveal: boolean
  time: number
  score: number | null
}

export const initialState: QuizState = {
  questions: undefined,
  question: undefined,
  choices: [],
  reveal: false,
  time: 0,
  score: null,
}

export const quizStore = proxy<QuizState>(deepClone(initialState))

