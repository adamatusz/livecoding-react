import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [servings, setServings] = useState(1)

  function handleVisibilityClick() {
    setIsVisible((prev) => !prev)
    setServings(1)
  }

  function handleServingsClick() {
    setServings((prev) => prev + 1)
  }

  console.log('Renderowanie komponentu')
  return (
    <div className='recipe-card'>
      <h2>Zupa Ogórkowa</h2>
      <p>
        Zupa ogórkowa jest jednym z najbardziej charakterystycznych dań kuchni
        polskiej.
      </p>
      <div>
        <b>Ilość porcji: {servings}</b>
        <Button onClick={handleServingsClick}>Dodaj kolejną porcję</Button>
      </div>
      <Button onClick={handleVisibilityClick}>
        {isVisible ? 'Ukryj listę skłądników' : 'Pokaż listę składników'}
      </Button>
      {isVisible && (
        <ul>
          <li>{`${1 * servings} litr bulionu drobiowego lub warzywnego`}</li>
          <li>{`${5 * servings} dużych kiszonych ogórków`}</li>
          <li>{`${1 * servings} duża marchewka`}</li>
        </ul>
      )}
    </div>
  )
}

export default App
