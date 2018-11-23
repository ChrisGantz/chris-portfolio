import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./components/landing-page";
import registerServiceWorker from "./registerServiceWorker";
import "./css/main.css";
// import "./css/float-grid.css";

ReactDOM.render(<LandingPage />, document.getElementById("root"));
registerServiceWorker();
