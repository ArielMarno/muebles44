import '../estilos/testimonios.css'

import star from '../assets/testimonios/star.png';
import n from '../assets/testimonios/N.webp';
import p from '../assets/testimonios/P.webp';
import f from '../assets/testimonios/F.webp';

const Card = ({image, name, text}) =>{
  return(
    <div className='card'>
      <div className='person'>
        <div className='perfil'>
          <img src={image} alt="usuario" />
          <h5>{name}</h5>
        </div>
        <div className='stars'>
          <img src={star} alt="estrella" /><img src={star} alt="estrella" /><img src={star} alt="estrella" /><img src={star} alt="estrella" /><img src={star} alt="estrella" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

const Testimonios = () => {
  return (
    <div className='testimonios'>
        <div className='testimonios_title'>
          <div className='testimonios_title-content'>
            <h4>Testimonios</h4>
            <h2>Que Opinan Nuestros Clientes</h2>
          </div>
          <a href="https://www.google.com/maps/place/Muebles+44/@-36.543493,-56.7012071,17z/data=!4m8!3m7!1s0x959c118e8505a04d:0x94aab3ebffb029a4!8m2!3d-36.543493!4d-56.6986322!9m1!1b1!16s%2Fg%2F11r6t1_qjh?entry=ttu" className="cssbuttons-io-button">
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

        <div className='card_contenedor'>
          <Card image={n} name="Noelia Lo Bruno" text='"Excelente atención, precio y calidad! Hecho a medida con la mejor predisposición de una idea que llevé. Entregados a tiempo y forma."' />
          <Card image={f} name="Federico Brizzi" text='"Respondieron todas mis dudas, rápidos y buena atención, lo compré y al otro día ya lo tenía en villa gesell. Los recomiendo!"'/> 
          <Card image={p} name="Paula Hayden" text='"Me  encantó  el divisor  a medida. Un trabajo impecable y súper prolijo, la entrega inmediata. La atención maravillosa, lo recomiendo 100%"' />
        </div>

    </div>
  )
}

export default Testimonios