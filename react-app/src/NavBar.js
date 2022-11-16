import React from 'react'
import './NavBar.css'
import Logo from './images/logo-white.png'

function NavBar() {
  return (
    <div className='NavBar-Container'>
        <div className='NavBar-Logo'>
            <img src={Logo} width={150} height={75} alt="Pure Shenandoah"/>
        </div>
        <div className='NavBar-Text'>
            <h3>SHOP ALL</h3>
            <h3>PET PRODUCTS</h3>
            <h3>ABOUT US</h3>
            <h3>EVENTS</h3>
            <h3>RETAIL</h3>
            <h3>SUBSCRIBE AND SAVE 25%</h3>
        </div>
    </div>
  )
}

export default NavBar