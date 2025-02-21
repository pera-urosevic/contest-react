import { startQuiz } from '../../stores/app/actions/startQuiz'

export function Start() {
  const onStart = (e: React.MouseEvent) => {
    e.preventDefault()
    startQuiz()
  }

  return (
    <>
      <h2>Start</h2>
      <p>Click <a href="#quiz" onClick={onStart}>here</a> to start the quiz.</p>
    </>
  )
}
