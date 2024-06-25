import './App.css';
import Navegador from '../src/componentes/Navegador';
import Home from '../src/componentes/Home';
import Destacados from '../src/componentes/Destacados';
import Servicios from '../src/componentes/Servicios';
import Razones from '../src/componentes/Razones';
import Testimonios from '../src/componentes/Testimonios';
import Productos from './componentes/Productos';
import Contacto from '../src/componentes/Contacto';



function App() {
  return (
    <>
      <Navegador />
      <Home />
      <Destacados />
      <Servicios />
      <Razones />
      <Testimonios />
      <Productos />
      <Contacto />
    </>
  )
}

export default App
