import { useState } from 'react'
import Soup from './components/Soup'
import Button from './components/Button'
import FormComponent from './components/FormComponent'

const cucumberSoup = {
  id: 1,
  title: 'Zupa ogórkowa',
  description:
    ' Zupa ogórkowa jest jednym z najbardziej charakterystycznych dań kuchni polskiej.',
  ingredients: [
    {
      id: 1,
      ingredientsAmount: 1,
      ingredientName: 'litr bulionu drobiowego lub warzywnego',
    },
    { id: 2, ingredientsAmount: 1, ingredientName: 'dużych kiszonych ogórków' },
    { id: 3, ingredientsAmount: 2, ingredientName: 'duża marchewka' },
  ],
}

function App() {
  const [hideButtons, setHideButtons] = useState(false)
  const [recipes, setRecipes] = useState([cucumberSoup]) // Null jako powszechna praktyka deklaracji pustego stanu.

  return (
    <>
      <Button onClick={() => setHideButtons((prev) => !prev)}>
        {hideButtons ? 'Pokaż' : 'Ukryj'} przyciski akcji
      </Button>
      {recipes.map((recipe) => (
        <Soup recipe={recipe} key={recipe.id} hideButtons={hideButtons} />
      ))}

      <FormComponent setRecipe={setRecipes} recipesAmount={recipes.length} />
    </>
  )
}

export default App
