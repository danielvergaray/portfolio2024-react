import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import ParticlesBackground from "./components/particles/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <BrowserRouter>
        {" "}
        
        <>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
