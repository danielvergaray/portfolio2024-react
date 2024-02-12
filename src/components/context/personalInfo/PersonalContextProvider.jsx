import React from 'react'
import PersonalContext from './PersonalContext';


const PersonalContextProvider = ({children}) => {

    const info = {
        infoHero: [
            {
                image: imagenHero,
                title: 'Hola, soy daniel',
                text: 'Programados',
            }
        ]
    }

    /* const values ={
        informacionHero= {info.infoHero}
    }
 */


  return <PersonalContext.Provider value ={info} >{children} </PersonalContext.Provider>
};

export default PersonalContextProvider