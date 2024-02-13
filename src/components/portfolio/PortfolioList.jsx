import React from 'react'

const PortfolioList = ({infoProyectos}) => {

  return (
    <section className='portfolio-proyectos'>
        
        {infoProyectos.map((proyecto)=>(
            <div className='portfolio-proyectos_recuadro'>
                <h3 className='oculto'>{proyecto.titulo} </h3>
                <p className='oculto'>{proyecto.descripcionBreve} </p>
            </div>
        ))
        
        
        }
    </section>
  )
}

export default PortfolioList