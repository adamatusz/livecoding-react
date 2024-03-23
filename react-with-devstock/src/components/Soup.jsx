import { useState } from 'react'

import { Button } from './index'

function Soup({ hideButtons, recipe }) {
  const [counter, setCounter] = useState(1)
  const [showIngredients, setShowIngredients] = useState(false)

  function increasePoritonsCount() {
    setCounter(counter + 1)
  }

  function handleClick() {
    setShowIngredients((prev) => !prev)
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {!hideButtons && (
        <div>
          <Button onClick={handleClick}>
            {showIngredients ? 'Ukryj' : 'Pokaż'} listę składników
          </Button>
          <Button onClick={increasePoritonsCount}>Increase</Button>
        </div>
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
