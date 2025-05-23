import Header from '../Header'
import CartListView from '../CartListView/index2'
import CartContext from '../../context/CartContext2'
import './index.css'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary/index2'
const Cart2 = () => (

  <CartContext.Consumer>
    {value=>{
      const{cartList ,deleteAllCart} = value;
      const length_cartList = cartList.length;

     const deleteCarts = ()=>{
      deleteAllCart()
     }
      return(
        <>
      <Header />
      <div className="cart-container">
        <div className="cart-content-container">
          <h1 className="cart-heading">My Cart</h1>
            <div className='all-cart-list-container'>
              {length_cartList >= 1 ? (
                <button className='remove-all-cart-button' onClick={deleteCarts}>
               Remove All
              </button>): null}
              {length_cartList >= 1 ?  <CartListView /> : <EmptyCartView/>}
            </div>
        </div>

        <div className='cart-view-card'>
          {length_cartList >= 1 ? <CartSummary/> : null}
        </div>
      </div>
    </>
      )
    }}
  </CartContext.Consumer>
 
)

export default Cart2
