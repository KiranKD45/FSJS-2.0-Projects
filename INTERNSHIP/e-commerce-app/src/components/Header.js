import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
        <img className='header-logo' src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'/>

        <div className='header-search'>
         <input type="text" className='header-seacrh-input' />
        </div>
        <div className='header-nav'>
            <div className='header-option'>
              <span className='option-1'>Hello,Guest</span>
              <span className='option-2'>Sign In</span>
            </div>
            <div className='header-option'>
              <span className='option-1'>Returns</span>
              <span className='option-2'>& Orders</span>
            </div><div className='header-option'>
              <span className='option-1'>Your</span>
              <span className='option-2'>Prime</span>
            </div><div className='header-option'>
              <span className='option-1'></span>
              <span className='option-2'></span>
            </div>
        </div>
    </div>
  )
}

export default Header;