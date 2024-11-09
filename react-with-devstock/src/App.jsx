import { useState } from "react";
import Soup from "./components/Soup";
import Button from "./components/Button";
import FormComponent from "./components/FormComponent";

const defaultSoup = {
  title: "Zupa Ogórkowa",
  description:
    "Zupa ogórkowa jest jednym z najbardziej charakterystycznych dań kuchni polskiej.",
  ingredients: {
    one: "litr bulionu drobiowego lub warzywnego",
    two: "dużych kiszonych ogórków",
    three: "duża marchewka",
  },
};

function App() {
  const [hideButtons, setHideButtons] = useState(false);
  const [soup, setSoup] = useState(null);
  return (
    <>
      <Button onClick={() => setHideButtons((prev) => !prev)}>
        {hideButtons ? "Pokaż" : "Ukryj"} przyciski akcji
      </Button>
      <Soup
        hideButtons={hideButtons}
        title={defaultSoup.title}
        description={defaultSoup.description}
        ingredients={defaultSoup.ingredients}
        recipe={defaultSoup.ingredients}
      />
      {soup && (
        <Soup
          hideButtons={hideButtons}
          title={soup.title}
          description={soup.description}
          recipe={soup.ingredients}
        />
      )}
      <FormComponent setSoup={setSoup} />
    </>
  );
}

export default App;
