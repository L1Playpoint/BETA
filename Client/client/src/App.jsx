import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import One9 from "./pages/19";
import Fourty9 from "./pages/49";
import Nine9 from "./pages/99";
import Answer from "./pages/Answer";
import Compete from "./pages/Compete";
import Duo from "./pages/Duo";
import Home from "./pages/Home";
import Trio from "./pages/Trio";

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/pool/duo" element={<Duo/>}/>
    <Route path="/pool/trio" element={<Trio/>}/>
    <Route path="/pool/19" element={<One9/>}/>
    <Route path="/pool/49" element={<Fourty9/>}/>
    <Route path="/pool/99" element={<Nine9/>}/>
    <Route path="/pool/duo/answer" element={<Answer/>}/>
    <Route path="/pool/duo/compete/:compete/" element={<Compete/>}/>
  </Routes>
  </BrowserRouter>;
}
