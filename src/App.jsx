import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarListContainer from "./components/navbar/NavBarListContainer";
import FooterListContainer from "./components/footer/FooterListContainer";

function App() {
  return (
    <>
      <ParticlesBackground />

      <NavBarListContainer />
      <BrowserRouter>
        <>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </>
      <FooterListContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
