import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [AbrirMenu, setAbrirMenu] = useState(false);
  return (
    
    
    <nav className='Navbar'>
    <div className='logo'><Link to='/'>PCGameHouse</Link><i className='fa-solid fa-computer'></i></div>
    <div className='nav-links' style={{transform: AbrirMenu ? 'translateX(0px)' : ''}}>
      
      <li>
        <NavLink to='/category/Memorias' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Memorias</NavLink>
      </li>
      <li>
        <NavLink to='/category/Gabinetes' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gabinetes</NavLink>
      </li>
      <li>
        <NavLink to='/category/Procesadores' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Procesadores</NavLink>
      </li>
      <li>
        <NavLink to='/category/Fuentes' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Fuentes</NavLink>
      </li>
    </div>
    <div><Link to='/cart'><CartWidget/></Link></div>
    <i onClick={() => setAbrirMenu(!AbrirMenu)} className="fas fa-bars menu"></i>
  </nav>
    
  )
}

export default Navbar