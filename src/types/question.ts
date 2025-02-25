export type Question = {
  id: number
  question: string
  time: number
  choices: {
    id: number
    choice: string | number
  }[]
}
