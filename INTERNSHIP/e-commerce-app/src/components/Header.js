import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
        <img className='header-logo' src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'/>

        <div className='header-search'>
         <input type="text" className='header-search-input' />
<SearchIcon className = "header-search-icon"/>
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
              <ShoppingCartIcon className='header-shoppingcart-icon'/>
             
            </div>
            <span className='option-2 shoppingcount'>0</span>
        </div>
    </div>
  )
}

export default Header;