export function Intro() {
  return (
    <>
      <h1 id="contest">Contest</h1>
      <p>A starter kit for a trivia game</p>
      <p>How to customize questions (and answers)?</p>
      <ul>
        <li>located in <code>/public/questions.json</code></li>
        <li>format:
          <ul>
            <li><code>question</code> contains the text of the question</li>
            <li><code>choices</code> is a list of <code>choice</code> and <code>points</code> for each choice</li>
            <li>points for e.g. wrong choices can be negative</li>
            <li><code>time</code> is the time limit in seconds, set to 0 for no limit</li>
          </ul>
        </li>
      </ul>
      <p>How to customize this page?</p>
      <ul>
        <li>edit <code>src/pages/welcome/Intro.tsx</code> and <code>src/pages/welcome/Start.tsx</code></li>
      </ul>
    </>
  )
}
