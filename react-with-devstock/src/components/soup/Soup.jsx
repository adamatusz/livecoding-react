import { useState } from 'react'
import styled from 'styled-components'

import { Button } from '../index'

const StykedRecipeCard = styled.div`
  background-color: antiquewhite;
  border: 1px solid sandybrown;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  & h2 {
    color: chocolate;
    margin-bottom: 10px;
  }

  & p {
    color: dimgray;
    margin-bottom: 10px;
  }

  & ul {
    list-style-type: none;
    padding: 0;
  }

  & li {
    margin-bottom: 5px;
    color: darkslategray;
  }
`

const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`

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
    <StykedRecipeCard>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {!hideButtons && (
        <StyledButtonsWrapper>
          <Button onClick={handleClick}>
            {showIngredients ? 'Ukryj' : 'Pokaż'} listę składników
          </Button>
          <Button onClick={increasePoritonsCount}>Increase</Button>
        </StyledButtonsWrapper>
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
    </StykedRecipeCard>
  )
}

export default Soup
