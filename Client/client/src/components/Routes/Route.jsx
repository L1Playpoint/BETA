import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowcaseFocused from "../../pages/ShowcaseFocused";
import Showcases from "../../pages/Showcases";
import UserProfile from "../../pages/UserProfile";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Showcases />}/>
        <Route path="/showcase/:showcase_id" element={<ShowcaseFocused />} />
        <Route path="/profile/:profile_id" element={<UserProfile />} />
    </Routes>
  );
}
