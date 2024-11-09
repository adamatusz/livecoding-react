import { useState, Fragment } from "react";
import Button from "./Button";

function Soup({ hideButtons, title, description, recipe }) {
  const [counter, setCounter] = useState(1);
  const [showIngredients, setShowIngredients] = useState(false);

  console.log("rerender App", hideButtons);

  function increasePoritonsCount() {
    setCounter(counter + 1);
  }

  function handleClick() {
    setShowIngredients((prev) => !prev);
    // setShowIngredients(!showIngredients);
  }

  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {recipe && (
        <>
          {!hideButtons && (
            <Fragment>
              <Button onClick={handleClick}>
                {showIngredients ? "Ukryj" : "Pokaż"} listę składników
              </Button>
              <Button onClick={increasePoritonsCount}>Increase</Button>
            </Fragment>
          )}

          <p>Portions: {counter}</p>
          {showIngredients && (
            <ul>
              <li>
                {1 * counter} {recipe.one}
              </li>
              <li>
                {5 * counter} {recipe.two}
              </li>
              <li>
                {1 * counter} {recipe.three}
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Soup;
