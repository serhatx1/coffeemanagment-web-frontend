import React from 'react'
import logo from "../img/logo.png"
export const Navbar = () => {
  return (
    <div className='NavbarContainer'>
       <img className='logo' src={logo} alt="" />
        <div className='Middle'>
        <p className='newCoffee'>Create New Coffee</p>
        <p className='newCoffee'>Check Orders</p>
        <p className='newCoffee'>Check Stocks</p>
        </div>
        <p className='bug'>
            Report a bug
        </p>


    </div>
  )
}
