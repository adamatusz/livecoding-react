import Button from "./components/Button";

function App() {
  const handleClick = () => console.log("clicked", event);

  const onChangeHandler = (event) => {
    console.log("handler", event.target.value);
  };

  const onKeyDown = (event) => {
    console.log("keyDown", event.target.value);
  };

  return (
    <div className="recipe-card">
      <h2>Zupa Ogórkowa</h2>
      <p>
        Zupa ogórkowa jest jednym z najbardziej charakterystycznych dań kuchni
        polskiej.
      </p>
      <Button onClick={handleClick}>Pokaż listę składników</Button>
      <input type="text" onChange={onChangeHandler} onKeyDown={onKeyDown} />
      <ul>
        <li>1 litr bulionu drobiowego lub warzywnego</li>
        <li>5 dużych kiszonych ogórków</li>
        <li>1 duża marchewka</li>
      </ul>
    </div>
  );
}

export default App;
