import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const CarouselMaker = ({ proyectosFiltrados, proyectoSeleccionado }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const arrayImagenes =
    proyectosFiltrados[proyectoSeleccionado].imagenesCarusel;

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      {arrayImagenes.map((imagen) => (
        <Carousel.Item>
          <img src={imagen.imagenCarrusel} alt={imagen.titulo} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselMaker;
