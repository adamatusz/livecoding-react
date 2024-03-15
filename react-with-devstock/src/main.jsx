import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const name = "Bartek";
const nameOfTheClass = "hidden";

const secondElement = <div className={nameOfTheClass}>String</div>;
console.log(secondElement);

ReactDOM.createRoot(document.getElementById("root")).render(secondElement);
