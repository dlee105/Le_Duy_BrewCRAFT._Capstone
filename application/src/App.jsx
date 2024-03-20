import { useState } from "react";

import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/homePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
