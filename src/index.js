import React from "react";
import ReactDOM from "react-dom"; //analogo a appendchild

import Badge from "./components/Badge";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge />, container);
