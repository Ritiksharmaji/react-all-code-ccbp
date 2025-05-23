import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import './index.css'
import EmptyCartView from '../EmptyCartView'
const Cart = () => (

  <CartContext.Consumer>
    {value=>{
      const{cartList} = value;
      const length_cartList = cartList.length;

     
      return(
        <>
      <Header />
      <div className="cart-container">
        <div className="cart-content-container">
          <h1 className="cart-heading">My Cart</h1>
         {length_cartList >= 1 ?  <CartListView /> : <EmptyCartView/>}
        </div>
      </div>
    </>
      )
    }}
  </CartContext.Consumer>
 
)

export default Cart
