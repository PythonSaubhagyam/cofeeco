import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "../src/App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import { Provider } from "react-redux";
import { Store } from "./Redux/App/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
