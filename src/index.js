import React from "react";
import ReactDOM from "react-dom"; //analogo a appendchild

const name = "Bihus";
// Forma JSX
const element = <h1>Hello, {name} Badges!</h1>;

// Forma React React.createElement("etiqueta HTML", {properties}, "Text");
/*const element = React.createElement(
  "h1",
  {},
  "Hello, " + name + " Badges!"
);
*/

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
