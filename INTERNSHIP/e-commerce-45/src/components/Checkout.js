import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
     <div className='checkout-left'>
       <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Air/400x39-SWM_NP._CB589429826_.jpg' alt='checkout-ad' className='checkout-ad' />

     <h2 className='checkout-title'>
        Your Shopping Cart
     </h2>

     </div>
     <div className='checkout-right'>
     <Subtotal />
     <button>Proceed to checkout</button>
     </div>

    </div>
  )
}

export default Checkout