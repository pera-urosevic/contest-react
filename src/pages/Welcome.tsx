import { Intro } from './welcome/Intro'
import { Start } from './welcome/Start'
import { fetchQuestions } from '../stores/actions/fetchQuestions'
import { resetQuiz } from '../stores/actions/resetQuiz'
import { appStore } from '../stores/appStore'


export function Welcome() {

  const onStart = (e: React.MouseEvent) => {
    e.preventDefault()
    resetQuiz()
    appStore.page = 'loading'
    fetchQuestions()
  }

  return (
    <>
      <header>
        <Intro />
      </header>
      <main>
        <Start onStart={onStart} />
      </main>
    </>
  )
}
