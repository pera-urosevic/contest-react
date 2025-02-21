import { useQuizStore } from '../quizStore'

export const revealAnswers = (reveal: boolean) => useQuizStore.setState(() => ({ reveal }))

