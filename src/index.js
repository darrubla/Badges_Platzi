import React from "react";
import ReactDOM from "react-dom"; //analogo a appendchild
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./global.css";
import App from "./components/App";

library.add(fab);

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
