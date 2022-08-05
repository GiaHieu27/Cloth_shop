import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import User from "./User";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <User />
      </Router>
    </Provider>
  </React.StrictMode>
);
