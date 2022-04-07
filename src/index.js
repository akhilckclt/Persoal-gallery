import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Auth from "./store/AuthContext";
import CurrentPost from "./store/CurrentPostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth>
    <CurrentPost>
    <App />
    </CurrentPost>
    </Auth>
  </React.StrictMode>
);



reportWebVitals();

