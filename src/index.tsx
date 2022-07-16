import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnimateSharedLayout } from "framer-motion";
import { store } from "./context/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CursorProvider from "./context/providers/cursor.provider";

import "./sass/index.scss";
import "./sass/core/_reset.scss";
import "./sass/core/_globals.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CursorProvider>
      <Provider store={store}>
        <AnimateSharedLayout>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AnimateSharedLayout>
      </Provider>
    </CursorProvider>
  </React.StrictMode>
);
