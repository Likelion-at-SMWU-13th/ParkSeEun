import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Melon from "./components/Melon";
import Info from "./components/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Melon />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
