import { snapshot } from 'valtio/vanilla'
import { supabaseClient } from '../../services/supabase'
import { quizStore } from '../quizStore'

export const fetchScore = async () => {
  const quizState = snapshot(quizStore)

  if (quizState.choices.length < 1) {
    quizStore.score = 0
    return
  }

  const db = supabaseClient()
  const { data, error } = await db.rpc('score', { choices: `{${quizState.choices}}` })
  if (error || !data) {
    alert('Error calculating score')
    return
  }

  quizStore.score = data as number
}
