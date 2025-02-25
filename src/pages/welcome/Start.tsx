type StartProps = {
  onStart: (e: React.MouseEvent) => void
}

export function Start(props: StartProps) {
  return (
    <>
      <h2>Start</h2>
      <p>Click <a href="#quiz" onClick={props.onStart}>here</a> to start the quiz.</p>
    </>
  )
}
