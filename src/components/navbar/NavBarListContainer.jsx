import React from 'react'
import NavBarList from './NavBarList'

const NavBarListContainer = () => {

const opcionesNavBar= [
    {
        titulo: "ABOUT", 
    },
    {
        titulo: "PORTFOLIO", 
    },
    {
        titulo: "CLIENTES", 
    },
    {
        titulo: "ESTUDIOS", 
    },
    {
        titulo: "CONTACTO", 
    },

]


  return (
    <NavBarList menu = {opcionesNavBar} />
  )
}

export default NavBarListContainer