import { useQuizStore } from '../quizStore'

export const pickRandom = () => useQuizStore.setState((state) => {
  if (!state.questions) return state
  const i = Math.floor(Math.random() * state.questions.length)
  const newQuestion = state.questions[i]
  const newQuestions = state.questions.filter((q) => q !== newQuestion)
  return { question: newQuestion, questions: newQuestions }
})
