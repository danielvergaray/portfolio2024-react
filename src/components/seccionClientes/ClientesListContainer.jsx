import React from "react";
import ClientesList from "./ClientesList";

const ClientesListContainer = () => {
  const infoClientes = {
    datosClientes: [
      {
        nombre: "Romina",
        empresa: "Bee Argentina",
        comentario:
          "Nuestro programador Daniel, demostró un excelente nivel de profesionalismo en el desarrollo de la página web, entregando la misma de alta calidad que superó todas nuestras  expectativas. Cabe destacar que ha sido super amable y colaborativo,  con una comunicación clara y una atención super meticulosa ybdetallista, la verdad  que trabajar con él fuera una experiencia excepcional.Super recomendable.",
      },
      {
        nombre: "Claudia Cardenas",
        empresa: "d",
        comentario:
          "Nuestro programador Daniel, demostró un excelente nivel de profesionalismo en el desarrollo de la página web, entregando la misma de alta calidad que superó todas nuestras  expectativas. Cabe destacar que ha sido super amable y colaborativo,  con una comunicación clara y una atención super meticulosa ybdetallista, la verdad  que trabajar con él fuera una experiencia excepcional.Super recomendable.",
      },
    ],
  };

  return <ClientesList clientes={infoClientes.datosClientes} />;
};

export default ClientesListContainer;
