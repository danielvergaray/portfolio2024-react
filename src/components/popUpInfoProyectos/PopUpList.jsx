import React from "react";

const PopUpList = ({cerrarPopUp, proyectosFiltrados, proyectoSeleccionado}) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{proyectosFiltrados[proyectoSeleccionado].titulo}</h2>
        <p>{proyectosFiltrados[proyectoSeleccionado].descripcion}</p>
        <button onClick={cerrarPopUp}>Cerrar</button>
      </div>
    </div>
  );
};

export default PopUpList;
