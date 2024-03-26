import { useState } from "react";

import { Route, Routes, Router } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/homePage";
import Shop from "./Pages/Shop/shopPage";
import Profile from "./Pages/Profile/profilePage";

import Register from "./Pages/UserAuth/Register";
import Login from "./Pages/UserAuth/Login";

import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
