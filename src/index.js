import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App.js";
import allReducers from "./reducers/index";

ReactDOM.render(
  <Provider store={createStore(allReducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
