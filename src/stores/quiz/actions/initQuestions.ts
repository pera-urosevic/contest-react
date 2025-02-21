import { Question } from '../../../types/question'
import { useAppStore } from '../../app/appStore'
import { useQuizStore } from '../quizStore'

export const initQuestions = async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}questions.json`)
  const questions: Question[] = await res.json()
  useQuizStore.setState(() => ({
    questions
  }))
  useAppStore.setState(() => ({
    page: 'welcome'
  }))
}
