import { proxy } from 'valtio/vanilla'

export type AppState = {
  page: 'welcome' | 'loading' | 'quiz' | 'gameover'
}

export const appStore = proxy<AppState>({
  page: 'welcome',
})
