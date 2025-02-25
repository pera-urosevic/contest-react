import { Alert } from '../components/Alert'
import { REVEAL_TIME } from '../config'
import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { quizStore } from '../stores/quizStore'
import { appStore } from '../stores/appStore'
import { fetchScore } from '../stores/actions/fetchScore'

let interval: number | null = null
let timeLeft = 0
let lastChoice = 0

const showAnswerTimer = (time: number | string) => {
  const timerEl = document.getElementById('timer')
  if (!timerEl) return
  if (time) {
    timerEl.innerHTML = `⌛ ${time}`
  } else {
    timerEl.innerHTML = ''
  }
}

export function Quiz() {
  const quizState = useSnapshot(quizStore)

  const onReveal = (cid: number | null) => {
    if (cid !== null) {
      lastChoice = cid
      if (interval) clearTimeout(interval)
      showAnswerTimer('')
      quizStore.reveal = true
      setTimeout(() => onChoice(cid), REVEAL_TIME)
    } else {
      onChoice(cid)
    }
  }

  const startAnswerTimer = () => {
    if (!quizState.question) return

    if (interval) {
      clearTimeout(interval)
    }

    timeLeft = quizState.question.time
    showAnswerTimer(timeLeft)

    interval = window.setInterval(() => {
      timeLeft = timeLeft - 1
      if (timeLeft < 1) {
        onReveal(null)
        return
      }
      showAnswerTimer(timeLeft)
    }, 1000)
  }

  const onChoice = (cid: number | null) => {
    if (cid !== null) {
      quizStore.choices.push(cid)
    }

    if (quizState.questions!.length < 1) {
      fetchScore()
      appStore.page = 'gameover'
    } else {
      startAnswerTimer()
      quizStore.question = quizStore.questions!.shift()
    }

    quizStore.reveal = false
  }

  if (!quizState.question) {
    return (
      <Alert message="Error: no questions available" />
    )
  }

  useEffect(() => {
    startAnswerTimer()
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])

  return (
    <div>
      <h3>{quizState.question.question}</h3>
      {quizState.question.choices.map((c) => (
        <p key={c.choice}>
          <button onClick={() => onReveal(c.id)} disabled={quizState.reveal} style={{ opacity: 1, filter: quizState.reveal && c.id !== lastChoice ? 'brightness(0.5)' : '' }}>
            {c.choice}
          </button>
        </p>
      ))}
      <div id="timer">⌛ {quizState.question.time}</div>
    </div>
  )
}
