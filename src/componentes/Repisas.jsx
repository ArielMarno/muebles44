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
        <a href="https://www.muebles44.com/repisas/cubos-flotantes-de-12-pulgada-rf007">
          <figure>
              <img src={uno} alt="repisas" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/repisas/especiero-flotante-rf008">
          <figure>
              <img src={dos} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/repisas/repisa-flotante-ctoallero-y-topes-rf013">
          <figure>
              <img src={tres} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/repisas/repisa-flotante-minimalista-rf002">
          <figure>
              <img src={cuatro} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/repisas/repisa-flotante-3d-rf023">
          <figure>
              <img src={cinco} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/repisas/repisa-flotante-rf003">
          <figure>
              <img src={seis} alt="repisa" />
            </figure>
        </a>
        </div>
        <div className='box_img'>
        <a href="https://www.muebles44.com/repisas/repisa-flotante-minimalista-rf001">
          <figure>
              <img src={siete} alt="repisa" />
            </figure>
        </a>
        </div>
    </div>
  )
}

export default Repisas