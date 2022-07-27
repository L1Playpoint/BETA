import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "remixicon/fonts/remixicon.css";
import { envData } from "./utils/envData";
// import UserAuthentication from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MoralisProvider appId={envData.appId} serverUrl={envData.serverUrl}>
      {/* <UserAuthentication> */}
        <App />
      {/* </UserAuthentication> */}
    </MoralisProvider>
  </React.StrictMode>
);
