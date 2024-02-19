import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarListContainer from "./components/navbar/NavBarListContainer";
import FooterListContainer from "./components/footer/FooterListContainer";
import { useRef } from 'react';
function App() {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };
  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <ParticlesBackground />

      <BrowserRouter>
        <NavBarListContainer scrollToSection={scrollToSection} />
        <>
          <Routes>
            <Route index element={<Home sectionRefs={sectionRefs} />} />
          </Routes>
        </>
        <FooterListContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
