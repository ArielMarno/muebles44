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
        <a href="">
          <figure>
            <img src={uno} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="">
          <figure>
            <img src={dos} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="">
          <figure>
            <img src={tres} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/vestidores/vestidor-con-estantes-y-perchero-1-m-vs001">
          <figure>
            <img src={cuatro} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="">
          <figure>
            <img src={cinco} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="">
          <figure>
            <img src={seis} alt="organizador" />
          </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="">
          <figure>
            <img src={siete} alt="organizador" />
          </figure>
        </a>
        </div>
    </div>
  )
}

export default Organizadores