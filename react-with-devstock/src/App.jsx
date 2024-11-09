import { useState } from "react";
import Soup from "./components/Soup";
import Button from "./components/Button";
import FormComponent from "./components/FormComponent";

const defaultSoup = {
  id: 1,
  title: "Zupa Ogórkowa",
  description:
    "Zupa ogórkowa jest jednym z najbardziej charakterystycznych dań kuchni polskiej.",
  ingredients: [
    {
      id: 1,
      amount: 1,
      name: "litr bulionu drobiowego lub warzywnego",
    },
    {
      id: 2,
      amount: 5,
      name: "dużych kiszonych ogórków",
    },
    {
      id: 3,
      amount: 1,
      name: "duża marchewka",
    },
  ],
};

function App() {
  const [hideButtons, setHideButtons] = useState(false);
  const [recipes, setRecipes] = useState([defaultSoup]);

  const addRecipe = (soup) => {
    setRecipes([...recipes, soup])
  }

  /*  const numbers = [1, 2, 3, 4];
  const jsxElements = [<Button key={1} />, <Button key={2}/>, <Button key={3} />]; 
  */

  return (
    <>
      {/*       <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <div>
        {jsxElements.map((button) => button)}
      </div>
 */}
      <Button onClick={() => setHideButtons((prev) => !prev)}>
        {hideButtons ? "Pokaż" : "Ukryj"} przyciski akcji
      </Button>
      <Soup
        // hideButtons={hideButtons}
        // title={defaultSoup.title}
        // description={defaultSoup.description}
        // ingredients={defaultSoup.ingredients}
      />
      { recipes.map(({ id, title, description, ingredients }) => ( 
        <Soup
        key={id}
         hideButtons={hideButtons}
         title={title}
         description={description}
         ingredients={ingredients}
        />
      ))}
      <FormComponent addRecipe={addRecipe} recipesAmount={recipes.length} />
    </>
  );
}

export default App;
