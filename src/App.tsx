import { GameOver } from './pages/GameOver'
import { Loading } from './pages/Loading'
import { Quiz } from './pages/Quiz'
import { Welcome } from './pages/Welcome'
import { useAppStore } from './stores/app/appStore'

export function App() {
  const page = useAppStore((state) => state.page)

  switch (page) {
    case 'loading':
      return <Loading />
    case 'welcome':
      return <Welcome />
    case 'quiz':
      return <Quiz />
    case 'gameover':
      return <GameOver />
    default:
      return <Loading />
  }
}
