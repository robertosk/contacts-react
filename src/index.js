import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js";
import "bootstrap";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./content/styles.scss";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
