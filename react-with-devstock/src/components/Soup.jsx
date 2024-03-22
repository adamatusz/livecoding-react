import { useState, Fragment } from 'react'
import Button from './Button'

function Soup({ hideButtons, recipe }) {
  const [counter, setCounter] = useState(1)
  const [showIngredients, setShowIngredients] = useState(false)

  function increasePoritonsCount() {
    setCounter(counter + 1)
  }

  function handleClick() {
    setShowIngredients((prev) => !prev)
    // setShowIngredients(!showIngredients);
  }

  return (
    <div className='recipe-card'>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {!hideButtons && (
        <Fragment>
          <Button onClick={handleClick}>
            {showIngredients ? 'Ukryj' : 'Pokaż'} listę składników
          </Button>
          <Button onClick={increasePoritonsCount}>Increase</Button>
        </Fragment>
      )}
      {recipe.ingredients && (
        <>
          <p>Portions: {counter}</p>
          {showIngredients && (
            <ul>
              {recipe.ingredients.map(
                ({ ingredientsAmount, ingredientName, id }) => (
                  <li key={id}>
                    {counter * ingredientsAmount} {ingredientName}
                  </li>
                )
              )}
            </ul>
          )}
        </>
      )}
    </div>
  )
}

export default Soup
