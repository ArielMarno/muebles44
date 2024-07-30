import '../estilos/img.css';
import uno from '../assets/repisas/h2.webp';
import dos from '../assets/repisas/c2a.webp';
import tres from '../assets/repisas/c2b.webp';
import cuatro from '../assets/repisas/v2.webp';
import cinco from '../assets/repisas/c2c.webp';
import seis from '../assets/repisas/c2d.webp';
import siete from '../assets/repisas/c2e.webp';

const Repisas = () => {
  return (
    <div className='contenedor_img'>
      <div className='box_img'>
        <a href="https://www.muebles44.com.ar/repisas/cubos-flotantes-de-12-pulgada-3-unidades">
          <figure>
              <img src={uno} alt="repisas" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/repisas/especiero-flotante-con-portarollo">
          <figure>
              <img src={dos} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/repisas/repisa-flotante-ctoallero-y-topes">
          <figure>
              <img src={tres} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/repisas/repisa-flotante-minimalista">
          <figure>
              <img src={cuatro} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/repisas/repisa-flotante-3d">
          <figure>
              <img src={cinco} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/repisas/repisa-flotante">
          <figure>
              <img src={seis} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com.ar/repisas/repisa-flotante-minimalista">
          <figure>
              <img src={siete} alt="repisa" />
            </figure>
        </a>
        </div>
    </div>
  )
}

export default Repisas