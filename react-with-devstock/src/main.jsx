import ReactDOM from "react-dom/client";
import Wrapper from "./components/Wrapper";

const element = (
  <>
    <div>
      <Wrapper />
    </div>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
