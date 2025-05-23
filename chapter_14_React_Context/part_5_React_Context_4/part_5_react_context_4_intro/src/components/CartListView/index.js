import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

// const cartList = [
//   {
//     title: 'Product 1',
//     brand: 'Brand Name',
//     id: 1001,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
//     price: 760,
//     quantity: 5,
//   },
//   {
//     title: 'Product 2',
//     brand: 'Brand Name',
//     id: 1002,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
//     price: 760,
//     quantity: 2,
//   },
// ]

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
