import CartItem from '../CartItem/index2'
import CartContext from '../../context/CartContext2'
import './index.css'



const CartListView = () => (

  <CartContext.Consumer>
    {value=>{
      const{cartList} = value;

     return(
      <ul className="cart-list">
      {cartList.map(eachCartItem => (
        <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
      ))}
      </ul>
     )
      
    }}

  </CartContext.Consumer>

  
)

export default CartListView
