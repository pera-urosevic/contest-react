import { create } from 'zustand'
import type { Question } from '../../types/question'

interface QuizState {
  questions?: Question[]
  question?: Question
  answers: number
  score: number
  reveal: boolean
  time: number
}

export const useQuizStore = create<QuizState>(() => ({
  questions: undefined,
  question: undefined,
  answers: 0,
  score: 0,
  reveal: false,
  time: 0,
}))
