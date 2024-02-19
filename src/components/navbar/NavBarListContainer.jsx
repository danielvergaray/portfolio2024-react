import React from 'react'
import NavBarList from './NavBarList'

const NavBarListContainer = () => {

const opcionesNavBar= [
    {
        titulo: "ABOUT", 
        ref: "sectionRef1",
    },
    {
        titulo: "PORTFOLIO", 
        ref: "sectionRef2",
    },
    {
        titulo: "CLIENTES",
        ref: "sectionRef3", 
    },
    {
        titulo: "ESTUDIOS", 
        ref: "sectionRef2",
    },
    {
        titulo: "CONTACTO",
        ref: "sectionRef4", 
    },

]


  return (
    <NavBarList menu = {opcionesNavBar} />
  )
}

export default NavBarListContainer