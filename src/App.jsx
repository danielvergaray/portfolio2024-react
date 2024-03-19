import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarListContainer from "./components/navbar/NavBarListContainer";
import FooterListContainer from "./components/footer/FooterListContainer";
import GeneralContextProvider from "./components/context/GeneralContextProvider";

function App() {
  
  return (
    <>
     {/*  <ParticlesBackground /> */}

      <GeneralContextProvider>
        <BrowserRouter>
          <NavBarListContainer />
          <>
            <Routes>
              <Route path="/" index element={<Home />} />
            </Routes>
          </>
          <FooterListContainer />
        </BrowserRouter>
      </GeneralContextProvider>
    </>
  );
}

export default App;
