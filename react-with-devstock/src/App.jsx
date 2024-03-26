import { useState } from "react";
import Soup from "./components/Soup";
import Button from "./components/Button/Button";
import FormComponent from "./components/FormComponent";
import Button2 from "./components/Button2";
// import { Rating } from "@mui/material";
import BasicRating from "./components/BasicRating";

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
    { id: 3, amount: 1, name: "duża marchewka" },
  ],
};

function App() {
  const [hideButtons, setHideButtons] = useState(false);
  const [recipes, setRecipes] = useState([defaultSoup]);

  const addRecipe = (soup) => {
    setRecipes([...recipes, soup]);
  };

  return (
    <>
      {/* <Button2>Test</Button2> */}
      <BasicRating stars={5} />
      {/* <Button color="green" onClick={() => setHideButtons((prev) => !prev)}>
        {hideButtons ? "Pokaż" : "Ukryj"} przyciski akcji
      </Button>
      {recipes.map(({ id, title, description, ingredients }) => (
        <Soup
          key={id}
          hideButtons={hideButtons}
          title={title}
          description={description}
          ingredients={ingredients}
        />
      ))}

      <FormComponent addRecipe={addRecipe} recipesAmount={recipes.length} /> */}
    </>
  );
}

export default App;
