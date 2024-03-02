import React from "react";
import ClientesList from "./ClientesList";

const ClientesListContainer = () => {
  const infoClientes = {
    datosClientes: [
      {
        nombre: "Romina",
        id: 1,
        empresa: "Bee Argentina",
        comentario:
          "Nuestro programador Daniel, demostró un excelente nivel de profesionalismo en el desarrollo de la página web, entregando la misma de alta calidad que superó todas nuestras  expectativas. Cabe destacar que ha sido super amable y colaborativo,  con una comunicación clara y una atención super meticulosa ybdetallista, la verdad  que trabajar con él fuera una experiencia excepcional.Super recomendable.",
        frase:
          `"Excelente nivel de profesionalismo en el desarrollo de la página web."`,
      },
      {
        nombre: "Claudia",
        id: 2,
        empresa: "",
        comentario:
          "Es un placer para mí recomendar a Daniel por su excelente trabajo en la creación del sitio web del cumpleaños de mi hijo. Su dedicación y habilidades técnicas fueron evidentes desde el principio. No solo logró capturar perfectamente la esencia del tema del cumpleaños, sino que también incorporó características interactivas que hicieron que la experiencia fuera memorable para todos los invitados.",
        frase:
          `"Su dedicación y habilidades técnicas fueron evidentes desde el principio."`,
      },
      /* {
        nombre: "3",
        id: 3,
        empresa: "3",
        comentario:
          "3",
        frase:
          "3",
      },
      {
        nombre: "4",
        id: 4,
        empresa: "4",
        comentario:
          "4",
        frase:
          "4",
      }, */
    ],
  };

  return <ClientesList clientes={infoClientes.datosClientes} />;
};

export default ClientesListContainer;
