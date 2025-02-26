import { deepClone } from 'valtio/utils'
import { initialState, QuizState, quizStore } from '../quizStore'

export const resetQuiz = () => {
  const initial = deepClone(initialState) as QuizState
  quizStore.questions = initial.questions
  quizStore.question = initial.question
  quizStore.choices = initial.choices
  quizStore.reveal = initial.reveal
  quizStore.score = initial.score
}
