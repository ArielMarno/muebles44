import '../estilos/destacados.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import dest1 from '../assets/destacados/foto1.webp';
import dest2 from '../assets/destacados/foto2.webp';
import dest3 from '../assets/destacados/foto3.webp';

const Destacados = () => {
  return (
    <div className="destacados">
      <div className='destacados_contenido'> 
          <h4>Novedades</h4>
          <h2>Productos Destacados</h2>
          <p>Presentamos algunos de los productos mas elegidos por nuestros clientes. Diseñados y fabricados con dedicación y amor por lo que hacemos, nuestros muebles de pino demuestran nuestra forma de trabajar y entregar productos de la mejor calidad. </p>
          <a href="https://www.muebles44.com/" className="cssbuttons-io-button">
            Ver más
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          </a>
      </div>
      <Carousel autoPlay infiniteLoop className='carusel'>
        <div>
          <img src={dest1} />
          <a href="https://www.muebles44.com/varios/organizador-con-3-cajones-varios-colores-or003"><p className="legend">Organizador</p></a>
        </div>
        <div>
          <img src={dest2} />
          <a href="https://www.muebles44.com/vestidores/vestidor-eco-con-estantes-y-perchero-vs001"><p className="legend">Vestidor</p></a>
        </div>
        <div>
          <img src={dest3} />
          <a href=""><p className="legend">Mesa Tandil</p></a>
        </div>
      </Carousel>
    </div>
  )
}

export default Destacados