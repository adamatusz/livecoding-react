import { useState, Fragment } from 'react'
import Button from './Button'

function Soup({ hideButtons }) {
  const [counter, setCounter] = useState(1)
  const [showIngredients, setShowIngredients] = useState(false)

  console.log('rerender App', hideButtons)

  function increasePoritonsCount() {
    setCounter(counter + 1)
  }

  function handleClick() {
    setShowIngredients((prev) => !prev)
    // setShowIngredients(!showIngredients);
  }

  return (
    <div className='recipe-card'>
      <h2>Zupa Ogórkowa</h2>
      <p>
        Zupa ogórkowa jest jednym z najbardziej charakterystycznych dań kuchni
        polskiej.
      </p>
      {!hideButtons && (
        <Fragment>
          <Button onClick={handleClick}>
            {showIngredients ? 'Ukryj' : 'Pokaż'} listę składników
          </Button>
          <Button onClick={increasePoritonsCount}>Increase</Button>
        </Fragment>
      )}

      <p>Portions: {counter}</p>
      {showIngredients && (
        <ul>
          <li>{1 * counter} litr bulionu drobiowego lub warzywnego</li>
          <li>{5 * counter} dużych kiszonych ogórków</li>
          <li>{1 * counter} duża marchewka</li>
        </ul>
      )}
    </div>
  )
}

export default Soup
