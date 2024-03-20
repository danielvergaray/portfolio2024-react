import React, {useContext} from "react";
import ClientesList from "./ClientesList";
import GeneralContext from "../context/GeneralContext";

const ClientesListContainer = () => {

const {idioma} = useContext(GeneralContext)

  const infoClientes = {
    datosClientes: [
      {
        nombre: "Romina",
        id: 1,
        empresa: "Bee Argentina",
        comentario:
          "Nuestro programador Daniel, demostró un excelente nivel de profesionalismo en el desarrollo de la página web, entregando la misma de alta calidad que superó todas nuestras expectativas. Cabe destacar que ha sido super amable y colaborativo, con una comunicación clara y una atención super meticulosa y detallista, la verdad que trabajar con él fuera una experiencia excepcional. Super recomendable.",
        frase:
          `"Excelente nivel de profesionalismo en el desarrollo de la página web."`,
      },
      {
        nombre: "Claudia",
        id: 2,
        empresa: "",
        comentario:
          "Es un placer para mí recomendar a Daniel por su excelente trabajo en la creación del sitio web del cumpleaños de mi hijo. Su dedicación y habilidades técnicas fueron evidentes desde el principio. No solo reflejó el espíritu del cumpleaños de forma increíble, sino que también agregó elementos visuales que hicieron mas dinámica la invitación",
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

  const infoClients = {
    dataClients: [
      {
        nombre: "Romina",
        id: 1,
        empresa: "Bee Store",
        comentario:
        "Our programmer, Daniel, demonstrated an excellent level of professionalism in the development of the website, delivering a high quality website that exceeded all of our expectations. It should be noted that he has been super friendly and collaborative, with clear communication and super meticulous and detailed attention, the truth is that working with him was an exceptional experience. Super recommended.",
        frase:
          `"Excellent level of professionalism in the development of the website."`,
      },
      {
        nombre: "Claudia",
        id: 2,
        empresa: "",
        comentario:
          "It is my pleasure to recommend Daniel for his excellent work in creating my son's birthday website. His dedication and technical skills were evident from the beginning. Not only did he reflect the spirit of the birthday in an incredible way, but he also added visual elements that made the invitation more dynamic.",
        frase:
          `"His dedication and technical skills were evident from the beginning."`,
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

  return <ClientesList clientes={idioma === "ESP" ? infoClientes.datosClientes :infoClients.dataClients } />;
};

export default ClientesListContainer;
