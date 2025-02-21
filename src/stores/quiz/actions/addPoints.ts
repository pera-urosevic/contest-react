import { useAppStore } from '../../app/appStore'
import { NUMBER_OF_QUESTIONS } from '../config'
import { useQuizStore } from '../quizStore'

export const addPoints = (points: number) => {
  const answers = useQuizStore.getState().answers + 1
  const score = useQuizStore.getState().score + points

  useQuizStore.setState((state) => {
    if (!state.question) return state
    return {
      answers,
      score,
    }
  })

  if (answers >= NUMBER_OF_QUESTIONS) {
    useAppStore.setState(() => ({
      page: 'gameover'
    }))
  }
}
