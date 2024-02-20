/* import React from "react";
import GeneralContext from "./GeneralContext";
import { useEffect } from "react";

const GeneralContextProvider = ({ children }) => {


  
  const scrollFunction = (ref) => {
    console.log(ref)
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
   
  };

  useEffect(() =>{

  },[])

  const values = {
    scrollFunction,
  };

  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
};

export default GeneralContextProvider; */
