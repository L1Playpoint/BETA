import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import 'remixicon/fonts/remixicon.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
      appId={process.env.REACT_APP_MORALIS_APP_ID}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
