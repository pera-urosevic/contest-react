import { endQuiz } from '../stores/app/actions/endQuiz'
import { useQuizStore } from '../stores/quiz/quizStore'

export function GameOver() {
  const score = useQuizStore((state) => state.score)

  const onContinue = (e: React.MouseEvent) => {
    e.preventDefault()
    endQuiz()
  }

  return (
    <>
      <header>
        <h1>Game Over</h1>
      </header>
      <main>
        <h1 className="Score">Score: {score}</h1>
        <a href="#continue" onClick={onContinue}>Continue</a>
      </main>
    </>
  )
};
