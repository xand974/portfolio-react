import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./App";
import { AnimateSharedLayout } from "framer-motion";
import "./sass/core/_reset.scss";
import "./sass/core/_globals.scss";
import { store } from "./context/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimateSharedLayout>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AnimateSharedLayout>
    </Provider>
  </React.StrictMode>
);
