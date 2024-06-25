import '../estilos/servicios.css';

import truck from '../assets/icons/truck-delivery.png';
import writing from '../assets/icons/writing.png';
import desk from '../assets/icons/desk.png'

import carpintero from '../assets/grilla/carpintero.png';
import pintor from '../assets/grilla/pintor.png';
import repartidor from '../assets/grilla/repartidor.png';
const Servicios = () => {
  return (
    <div className='servicios' id='servicios'>
      <div className='servicios_title'>
        <h2>Nuestros Servicios</h2>
      </div>
        <div className='servicios_grilla-contenedor'>
          <div className='grilla-img'>
            <img src={carpintero} alt="" />
          </div>
          <div className='grilla'>
            <img src={desk} alt="mueble" />
            <h4>Muebles a Medida</h4>
            <p>Creemos que la versatilidad es una virtud fundamental a la hora de organizar y decorar el lugar deseado, por esto disfrutamos asesorando y ofreciendo la posibilidad de adaptar nuestros diseños a cada espacio unico.</p>
          </div>
          
          <div className='grilla-img'>
            <img src={pintor} alt="pintor" />
          </div>
          <div className='grilla'>
            <img src={writing} alt="lapiz" />
            <h4>Diseño Personalizado</h4>
            <p>Estamos gustosos de participar en tu proyecto con diseños a medida, contribuyendo con nuestra creatividad y experiencia en la creación de modelos personalizados e innovadores.</p>
          </div>
          <div className='grilla-img'>
            <img src={repartidor} alt="" />
          </div>
          
          <div className='grilla'>
            <img src={truck} alt="camión" />
            <h4>Entregas a Domicilio</h4>
            <p>Dentro de nuestro distrito, contamos con entrega de envio sin cargo y a traves de nuestra tienda virtual te brindamos la posibilidad de recibir nuestros productos directamente en tu domicilio por el metodo de transporte que elijas.</p>
          </div>
        </div>
    </div>
  )
}

export default Servicios