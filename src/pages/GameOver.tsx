import { useSnapshot } from 'valtio'
import { quizStore } from '../stores/quizStore'
import { appStore } from '../stores/appStore'

export function GameOver() {
  const quizState = useSnapshot(quizStore)

  const onContinue = (e: React.MouseEvent) => {
    e.preventDefault()
    appStore.page = 'welcome'
  }

  return (
    <>
      <header>
        <h1>Game Over</h1>
      </header>
      {quizState.score === null &&
        <main>
          <p>Loading score...</p>
        </main>
      }
      {quizState.score !== null &&
        <main>
          <h1 className="Score">Score: {quizState.score}</h1>
          <a href="#continue" onClick={onContinue}>Continue</a>
        </main>
      }
    </>
  )
};
