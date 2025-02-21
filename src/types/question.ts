export type Question = {
  question: string
  choices: {
    choice: string | number
    points: number
  }[]
  time: number
}
