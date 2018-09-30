import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import "./css/float-grid.css";
import LandingPage from "./components/landing-page";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<LandingPage />, document.getElementById("root"));
registerServiceWorker();
