import ReactDOM from "react-dom/client";
import { useState } from "react";
import Button from "./components/Button";
import "./index.css";

function Hello() {
  return <div>Cześć</div>;
}

function AppComponent() {
  const [number, setNumber] = useState(10);

  const increaseNumber = () => {
    const newNumber = number + 1;
    setNumber(newNumber);

    console.log(newNumber);
  };

  return (
    <>
      <div>
        <Button
          color="green"
          text="Increase number"
          clickHandler={increaseNumber}
        />
      </div>
      <Hello />
      <p>{number}</p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppComponent />);
