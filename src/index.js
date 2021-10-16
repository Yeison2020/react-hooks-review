import React from "react";
import ReactDom from "react-dom";
// import App from "./App";
import CounterApp from "./CounterApp";
import "./index.css";

// Ap import app

//-------------------------------------------

const divRoot = document.querySelector("#app");

ReactDom.render(<CounterApp value={10} />, divRoot);
