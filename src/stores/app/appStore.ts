import { create } from 'zustand'

interface AppState {
  page: string
}

export const useAppStore = create<AppState>(() => ({
  page: 'loading',
}))
