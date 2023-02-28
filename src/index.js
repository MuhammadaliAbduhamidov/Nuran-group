import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import './i18next.js'
import App from "./App";
import Wrapper from "./components/Wrapper";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={"...loading"}>
    <Wrapper>
      <App />
    </Wrapper>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
