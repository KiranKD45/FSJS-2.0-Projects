import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


function Header() {
  return (
    <div className='header'>
      <Link to="/">
      <img className='header-logo' src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'/>
      </Link>
        

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
            </div>
            <Link to="/checkout">
            <div className='header-option'>
              <ShoppingCartIcon className='header-shoppingcart-icon'/>
             
            </div>
            <span className='option-2 shoppingcount'>0</span>
            </Link>
        </div>
    </div>
  )
}

export default Header;