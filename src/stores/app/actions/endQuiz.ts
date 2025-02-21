import { useAppStore } from '../appStore'

export const endQuiz = () => {
  useAppStore.setState(() => ({
    page: 'welcome',
  }))
}
