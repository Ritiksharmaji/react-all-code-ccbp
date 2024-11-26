

import React from 'react'
import './index.css'
import CartContext from '../../context/CartContext'


function CartSummary2() {

   return(
    <CartContext.Consumer>
    {value=>{
        const{totalAmount,cartList}=value
        return (
            <div className='cart-summary-conainer'>
                <h1 className='heading-order'>
                    Order Total:
                </h1>
                <span className='total-amount-span'>
                   Rs {totalAmount}/-
                </span>
                <p className='paragraph'>
               {cartList.length} Items in cart
                </p>
            </div>
          )
    }}
</CartContext.Consumer>
   )
  
}

export default CartSummary2