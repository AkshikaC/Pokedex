import { Routes, Route } from "react-router-dom";
import Pokedex from './Pokedex';
import Login from './Login';
import SignUp from './SignUp';
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/poke" element={<Pokedex />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;