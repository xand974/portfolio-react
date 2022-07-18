import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CursorProvider>
  </React.StrictMode>
);
