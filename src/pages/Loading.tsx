import { initQuestions } from '../stores/quiz/actions/initQuestions'

let boot = true

export function Loading() {
  if (boot) {
    initQuestions()
    boot = false
  }

  return (
    <>
      <header>
        <h1>Contest</h1>
      </header>
      <main>
        <h2>Loading...</h2>
      </main>
    </>
  )
}
