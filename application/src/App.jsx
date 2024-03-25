import { useState } from "react";

import { Route, Routes, Router } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/homePage";
import Shop from "./Pages/Shop/shopPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
