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
        <a href="">
          <figure>
            <img src={uno} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/pa033-sansieveira">
          <figure>
            <img src={dos} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/pa029-topiarios">
          <figure>
            <img src={tres} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/pa023-palmera-areca-190">
          <figure>
            <img src={cuatro} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/pa016-topiario-con-flores">
          <figure>
            <img src={cinco} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/pa017-cactus-grande">
          <figure>
            <img src={seis} alt="plantas" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/plantas-artificiales/pa032-orquideas">
          <figure>
            <img src={siete} alt="plantas" />
          </figure>
        </a>
        </div>
    </div>
  )
}

export default PlantasImg