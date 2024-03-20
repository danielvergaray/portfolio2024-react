import React, { useState } from "react";
import GeneralContext from "./GeneralContext";


const GeneralContextProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("ESP");

  /* const seleccionarIdioma = (idioma) => {
   
    if(idioma === "ESP"){
      setIdioma("ESP");
    } else {
      setIdioma ("ENG");
      
    }
  }; */

  const values = {
    idioma,
    setIdioma,
    /* seleccionarIdioma */
  };

  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
