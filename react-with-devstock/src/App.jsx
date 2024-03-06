import Button from './components/Button'

function handleClick() {
  alert('Lista składników')
}

function App() {
  return (
    <div className='recipe-card'>
      <h2>Zupa Ogórkowa</h2>
      <p>
        Zupa ogórkowa jest jednym z najbardziej charakterystycznych dań kuchni
        polskiej.
      </p>
      <Button onClick={handleClick}>Pokaż listę składników</Button>
      <ul>
        <li>1 litr bulionu drobiowego lub warzywnego</li>
        <li>5 dużych kiszonych ogórków</li>
        <li>1 duża marchewka</li>
      </ul>
    </div>
  )
}

export default App
