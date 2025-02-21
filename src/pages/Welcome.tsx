import { Intro } from './welcome/Intro'
import { Start } from './welcome/Start'

export function Welcome() {
  return (
    <>
      <header>
        <Intro />
      </header>
      <main>
        <Start />
      </main>
    </>
  )
}
