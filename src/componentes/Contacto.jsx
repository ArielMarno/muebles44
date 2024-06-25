import '../estilos/contacto.css';
import logo from '../assets/logo.jpg';

import fc from '../assets/contacto/fc.png';
import ig from '../assets/contacto/ig.png';
import wsp from '../assets/contacto/wsp.png';

const Contacto = () => {
  return (
    <div className='contacto' id='contacto'>
      <div className='contacto_logo'>
        <a href="#"><img src={logo} alt="muebles44 logo" /></a>
        <a href='https://wa.link/u7l35u' className="animated-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span className="text">CONTACTO</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </a>
      </div>
      <div className='linea'></div>
      <div className='contacto_data-contenedor' >
        <div className='contacto_content'>
            <h3>Contactanos</h3>
            <div className='contacto_content-data'>
              <p><span>Email: </span>muebles44.lacosta@gmail.com</p>
              <p><span>Dirección: </span>Calle 41 °685, Santa Teresita(Buenos Aires)</p>
              <p><span>Teléfono: </span> +54 9 2246 55-8979</p>
            </div>

            <div className='contacto_content-social'>
                <a href="https://www.facebook.com/decomuebles44"><img src={fc} alt="facebook logo" /></a>
                <a href="https://www.instagram.com/muebles44.lacosta/"><img src={ig} alt="instagram logo" /></a>
                <a href="https://wa.link/u7l35u"><img src={wsp} alt="whatsapp logo" /></a>
            </div>
        </div>
        <div className='contacto_ubi'>
          <h3>Donde Encontrarnos</h3>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.440572188071!2d-56.7012071233415!3d-36.54348866251594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c118e8505a04d%3A0x94aab3ebffb029a4!2sMuebles%2044!5e0!3m2!1ses!2sar!4v1719005141438!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className='copy'>
           <p>©Copyright 2024 Muebles44 - Todos los derechos reservados. <span>Sitio web diseñado y desarrollado por <a href="https://sunfloweragencia.com/">SunFlower Agencia Digital</a></span>.</p> 
        </div>
    </div>
  )
}

export default Contacto