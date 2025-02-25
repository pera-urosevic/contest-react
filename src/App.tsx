import { useSnapshot } from 'valtio'
import { GameOver } from './pages/GameOver'
import { Loading } from './pages/Loading'
import { Quiz } from './pages/Quiz'
import { Welcome } from './pages/Welcome'
import { appStore } from './stores/appStore'

export function App() {
  const appState = useSnapshot(appStore)

  switch (appState.page) {
    case 'welcome':
      return <Welcome />
    case 'loading':
      return <Loading />
    case 'quiz':
      return <Quiz />
    case 'gameover':
      return <GameOver />
    default:
      return <Welcome />
  }
}
