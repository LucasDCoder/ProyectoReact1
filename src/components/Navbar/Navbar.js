import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function Navbar() {
  const [AbrirMenu, setAbrirMenu] = useState(false);
  return (
    <div>
      <nav>
        <div className='logo'>PCGameHouse<i className='fa-solid fa-computer'></i></div>
        <ul className='nav-links' style={{transform: AbrirMenu ? 'translateX(0px)' : ''}}>
          <li>
            <Link to={`/category/Memorias`}>Memorias</Link>
          </li>
          <li>
            <Link to={`/category/Gabinetes`}>Gabinetes</Link>
          </li>
          <li>
            <Link to={`/category/Procesadores`}>Procesadores</Link>
          </li>
          <li>
            <Link to={`/category/Fuentes`}>Fuentes</Link>
          </li>
        </ul>
        <div><CartWidget/></div>
        <i onClick={() => setAbrirMenu(!AbrirMenu)} className="fas fa-bars menu"></i>
      </nav>
    </div>
  )
}

export default Navbar