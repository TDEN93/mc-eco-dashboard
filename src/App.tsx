import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className={"container"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
