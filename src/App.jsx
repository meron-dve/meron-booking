//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "./assets/vite.svg";
//import heroImg from "./assets/hero.png";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import About from "./components/About";
import Main from "./components/Main";
function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
