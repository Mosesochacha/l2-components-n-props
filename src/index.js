import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./components/app/App";
import CardA from "./components/card-class/CardA";
 import CardB from "./components/card-function/CardB";

const app = document.getElementById('app')
const main = ReactDOM.createRoot(app)

// display on the page 
main.render(
  <>
  <h1>Welcome to React!</h1>
  <App/>
  <CardA/>
  <CardB/>
  </>
)