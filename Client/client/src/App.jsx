import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./components/Routes/Route";
import Web3Auth from "./components/Web3Auth";
import UserAuthentication from "./Context/Context";

export default function App() {
  return (
    <div>
      <UserAuthentication>
        <BrowserRouter>
          <Web3Auth />
          <PageRoutes />
          <div
            style={{
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            2022 Copyright &copy; Playpoint. All Rights Reserved
          </div>
        </BrowserRouter>
      </UserAuthentication>
    </div>
  );
}
