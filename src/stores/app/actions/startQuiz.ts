import { pickRandom } from '../../quiz/actions/pickRandom'
import { useQuizStore } from '../../quiz/quizStore'
import { useAppStore } from '../appStore'

export const startQuiz = () => {
  useQuizStore.setState(() => ({
    score: 0,
    answers: 0,
    reveal: false,
  }))
  useAppStore.setState(() => ({
    page: 'quiz',
  }))
  pickRandom()
}
