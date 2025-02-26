import { useEffect, useRef } from 'react'

type CountdownProps = {
  time: number
  onExpire: () => void
}

export const Countdown = (props: CountdownProps) => {
  const interval = useRef<number | null>(null)
  const el = useRef<HTMLElement>(null)
  const remaining = useRef<number>(0)

  const clear = () => {
    if (interval.current) clearInterval(interval.current)
  }

  const start = () => {
    clear()
    remaining.current = props.time

    interval.current = window.setInterval(() => {
      remaining.current--
      if (el.current) el.current.innerText = String(remaining.current)

      if (remaining.current < 1) {
        clear()
        props.onExpire()
      }
    }, 1000)
  }

  useEffect(() => {
    start()
    return () => clear()
  }, [])

  return (
    <div>⌛ <span ref={el}>{props.time}</span></div>
  )
}
