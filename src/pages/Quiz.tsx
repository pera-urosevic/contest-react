import { useQuizStore } from '../stores/quiz/quizStore'
import { Alert } from '../components/Alert'
import { NO_ANSWER_POINTS, REVEAL_TIME } from '../stores/quiz/config'
import { revealAnswers } from '../stores/quiz/actions/revealAnswers'
import { pickRandom } from '../stores/quiz/actions/pickRandom'
import { addPoints } from '../stores/quiz/actions/addPoints'
import { useEffect } from 'react'

let interval: number | null = null
let timeLeft = 0

const setTimer = (time: number | string) => {
  const timerEl = document.getElementById('timer')
  if (!timerEl) return
  if (time) {
    timerEl.innerHTML = `⌛ ${time}`
  } else {
    timerEl.innerHTML = ''
  }
}

export function Quiz() {
  const question = useQuizStore((state) => state.question)
  const reveal = useQuizStore((state) => state.reveal)

  const onReveal = (points: number) => {
    if (interval) clearTimeout(interval)
    setTimer('')
    revealAnswers(true)
    setTimeout(() => onAnswer(points), REVEAL_TIME)
  }

  const startTimer = () => {
    if (!question) return

    if (interval) {
      clearTimeout(interval)
    }

    timeLeft = question.time
    setTimer(timeLeft)

    interval = setInterval(() => {
      timeLeft = timeLeft - 1
      if (timeLeft < 1) {
        onReveal(NO_ANSWER_POINTS)
        return
      }
      setTimer(timeLeft)
    }, 1000)
  }

  const onAnswer = (points: number) => {
    addPoints(points)
    revealAnswers(false)
    startTimer()
    pickRandom()
  }

  if (!question) {
    return (
      <Alert message="Error: no questions available" />
    )
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])

  return (
    <div>
      <h3>{question.question}</h3>
      {question.choices.map((c) => (
        <p key={c.choice}>
          <button onClick={() => onReveal(c.points)} disabled={reveal}>
            {c.choice}
            {reveal &&
              <>
                &nbsp;
                &hellip;
                &nbsp;
                <strong>{c.points}</strong>
              </>
            }
          </button>
          &nbsp;
        </p>
      ))}
      <div id="timer">⌛ {question.time}</div>
    </div>
  )
}
