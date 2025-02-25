import { supabaseClient } from '../../services/supabase'
import { Question } from '../../types/question'
import { appStore } from '../appStore'
import { quizStore } from '../quizStore'

export const fetchQuestions = async () => {
  const db = supabaseClient()

  const { data, error } = await db.rpc('random_questions')
  if (error || !data) {
    alert('No questions found')
    return
  }

  const mapped: any = {}
  for (const record of data) {
    if (!(record.question in mapped)) {
      mapped[record.question] = {
        qid: record.qid,
        time: record.time,
        question: record.question,
        choices: [{ cid: record.cid, choice: record.choice }]
      }
    } else {
      mapped[record.question].choices.push({ cid: record.cid, choice: record.choice })
    }
  }

  const questions: Question[] = Object.values(mapped).map((o: any) => ({
    id: o.qid,
    question: o.question,
    time: o.time,
    choices: o.choices.map((c: any) => ({
      id: c.cid,
      choice: c.choice
    }))
  }))

  quizStore.question = questions.shift()
  quizStore.questions = questions

  appStore.page = 'quiz'
}
