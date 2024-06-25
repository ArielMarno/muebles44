import { React, useState } from 'react'
import '../estilos/navegador.css';
import Burguer from '../componentes/Burguer';
import logo from '../assets/logo.jpg';
import ig from '../assets/instagram-nav.png';

const Navegador = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }



  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        <a href="#"><img src={logo} alt="logo" /></a>
      </div>
      <nav className={`links ${click ? 'active' : ''}`}>
        <a href="#servicios">Servicios</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className="burguer">
        <Burguer click={click} handleClick={handleClick}/> 
      </div>
    </div>
  )
}

export default Navegador