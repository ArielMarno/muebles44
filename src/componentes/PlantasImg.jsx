import '../estilos/img.css';

import uno from '../assets/plantas/h1.webp';
import dos from '../assets/plantas/c1a.webp';
import tres from '../assets/plantas/c1b.webp';
import cuatro from '../assets/plantas/v1.webp';
import cinco from '../assets/plantas/c1c.webp';
import seis from '../assets/plantas/c1d.webp';
import siete from '../assets/plantas/c1e.webp';

const PlantasImg = () => {
  return (
    <div className='contenedor_img'>
      <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/mini-suculentas">
          <figure>
            <img src={uno} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/sansieveira">
          <figure>
            <img src={dos} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/topiarios">
          <figure>
            <img src={tres} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/palmera-areca-alta">
          <figure>
            <img src={cuatro} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/topiarios">
          <figure>
            <img src={cinco} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/cactus-grande">
          <figure>
            <img src={seis} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/orquideas-en-maceta">
          <figure>
            <img src={siete} alt="plantas" />
          </figure>
        </a>
        </div>
    </div>
  )
}

export default PlantasImg