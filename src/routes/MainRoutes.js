import Home from "../components/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import EditContact from "../components/contact/EditContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
