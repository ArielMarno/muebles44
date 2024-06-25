import React, { useState } from 'react';

import Repisas from './Repisas';
import Organizadores from './Organizadores';
import PlantasImg from './PlantasImg';

import '../estilos/productos.css';

const Productos = () => {

    const [selectedLink, setSelectedLink] = useState('Repisas');
  
    const handleClick = (link) => {
      setSelectedLink(link);
    };



  return (
    <div className='productos' id='productos'>
      <div className='productos_title'>
        <h2>Nuestros Productos</h2>
        <div className='productos_title-nav'>
          <a onClick={() => handleClick('Repisas')}>Repisas</a>
          <a onClick={() => handleClick('Organizadores')}>Organizadores</a>
          <a onClick={() => handleClick('Plantas Artificiales')}>Plantas Artificiales</a>
        </div>
      </div>
      <div className='productos_grilla'>
        {selectedLink === 'Repisas' && <Repisas />}
        {selectedLink === 'Organizadores' && <Organizadores />}
        {selectedLink === 'Plantas Artificiales' && <PlantasImg />}
      </div>
    </div>
  )
}

export default Productos