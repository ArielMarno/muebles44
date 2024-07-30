import '../estilos/img.css';

import uno from '../assets/organizadores/h3.webp';
import dos from '../assets/organizadores/c3a.webp';
import tres from '../assets/organizadores/c3b.webp';
import cuatro from '../assets/organizadores/v3.webp';
import cinco from '../assets/organizadores/c3c.webp';
import seis from '../assets/organizadores/c3d.webp';
import siete from '../assets/organizadores/c3e.webp';
const Organizadores = () => {
  return (
    <div className='contenedor_img'>
      <div className='box_img'>
        <a href="https://www.muebles44.com.ar/organizadores/organizador-con-estantes-y-2-cajones">
          <figure>
            <img src={uno} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/organizadores/organizador-tandil-con-estantes-y-cajones">
          <figure>
            <img src={dos} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/organizadores/organizador-con-cajon-de-madera-y-de-mimbre">
          <figure>
            <img src={tres} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/organizadores/vestidores/vestidor-con-estantes-y-perchero">
          <figure>
            <img src={cuatro} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/organizadores/vestidores/vestidor-nordico">
          <figure>
            <img src={cinco} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/organizadores/perchero-nordico-grande">
          <figure>
            <img src={seis} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/organizadores/organizador-de-8-cajones">
          <figure>
            <img src={siete} alt="organizador" />
          </figure>
        </a>
        </div>
    </div>
  )
}

export default Organizadores