import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget';


function Navbar() {
  const [AbrirMenu, setAbrirMenu] = useState(false);
  return (
    <div>
      <nav>
        <div className='logo'>PCGameHouse<i className='fa-solid fa-computer'></i></div>
        <ul className='nav-links' style={{transform: AbrirMenu ? 'translateX(0px)' : ''}}>
          <li><a>Inicio</a>
          </li>
          <li><a>Productos</a>
          </li>
          <li><a>Servicios</a>
          </li>
          <li><a>Contacto</a>
          </li>
        </ul>
        <div><CartWidget/></div>
        <i onClick={() => setAbrirMenu(!AbrirMenu)} className="fas fa-bars menu"></i>
      </nav>
    </div>
  )
}

export default Navbar