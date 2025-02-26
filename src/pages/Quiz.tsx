import { Alert } from '../components/Alert'
import { REVEAL_TIME } from '../config'
import { useSnapshot } from 'valtio'
import { quizStore } from '../stores/quizStore'
import { appStore } from '../stores/appStore'
import { fetchScore } from '../stores/actions/fetchScore'
import { Countdown } from './quiz/Countdown'
import { useState } from 'react'

let lastChoice: number | null = 0

export function Quiz() {
  const quizState = useSnapshot(quizStore)
  const [showCountdown, setShowCountdown] = useState(true)

  const onExpire = () => {
    onReveal(null)
  }

  const onReveal = (cid: number | null) => {
    lastChoice = cid
    quizStore.reveal = true
    setShowCountdown(false)
    setTimeout(() => onChoice(cid), REVEAL_TIME)
  }

  const onChoice = (cid: number | null) => {
    if (cid !== null) {
      quizStore.choices.push(cid)
    }

    if (quizState.questions!.length < 1) {
      fetchScore()
      appStore.page = 'gameover'
    } else {
      setShowCountdown(true)
      quizStore.question = quizStore.questions!.shift()
    }

    quizStore.reveal = false
  }

  if (!quizState.question) {
    return (
      <Alert message="Error: no questions available" />
    )
  }

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
      {showCountdown && <Countdown time={quizState.question.time} onExpire={onExpire} />}
    </div>
  )
}
