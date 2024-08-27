import React from 'react'
import logo from "../img/logo.png"
export const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <a href="/">
       <img className='logo' src={logo} alt="" />
       </a>
        <div className='Middle'>
        <a href='/coffee/create' className='newCoffee'>Create New Coffee</a>
        <a href='/coffee/order' className='newCoffee'>Check Orders</a>
        <a className='newCoffee'>Check Stocks</a>
        </div>
        <a className='bug newCoffee'>
            Report a bug
        </a>


    </div>
  )
}
