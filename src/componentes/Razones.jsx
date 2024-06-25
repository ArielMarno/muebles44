import '../estilos/razones.css';

import calidad from '../assets/icons/diamond.png';
import persona from '../assets/icons/user.png';
import device from '../assets/icons/device.png';

import local from '../assets/local.webp';

const Razones = () => {
  return (
    <div className='razones' id='nosotros'>

      <div className='razones_contenedor'>

      <div className='razones_title'>
        <h4>Razones</h4>
        <h2>Por Que Elegirnos?</h2>
      </div>


        <div className='razones_contenedor-items'>
          <div className='items'>
            <img src={calidad} alt="diamante" />
            <div className='items_content'>
              <h3>Calidad Garantizada</h3>
              <p>Muebles construidos para durar y mantener su belleza.</p>
            </div>
          </div>

          <div className='items'>
            <img src={persona} alt="usuario" />
            <div className='items_content'>
              <h3>Personalización</h3>
              <p>Ofrecemos la oportunidad de adaptar nuestros diseños a tu espacio y estilo unico.</p>
            </div>
          </div>

          <div className='items'>
            <img src={device} alt="dispositivo" />
            <div className='items_content'>
              <h3>Asesoramiento y Recomendaciones</h3>
              <p>Contamos con profesionales en decoración y fabricación de muebles para asesorarte en cada compra.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='razones_img-contenedor'>
        <img src={local} alt="tienda" />  
      </div>
    </div>
  )
}

export default Razones