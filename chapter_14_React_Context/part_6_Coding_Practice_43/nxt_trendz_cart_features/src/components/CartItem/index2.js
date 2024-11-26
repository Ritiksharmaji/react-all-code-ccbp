import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'
import CartContext from '../../context/CartContext2'

const CartItem2 = props => {
  const {cartItemDetails} = props
  const {title, brand, quantity, price, imageUrl,id} = cartItemDetails

  return (
    <CartContext.Consumer>
      {value => {
        const {increaseQuantity, decreaseQuantity, deleteCartItem} = value;

        return (
          <li className="cart-item">
            <img className="cart-product-image" src={imageUrl} alt={title} />
            <div className="cart-item-details-container">
              <div className="cart-product-title-brand-container">
                <p className="cart-product-title">{title}</p>
                <p className="cart-product-brand">by {brand}</p>
              </div>
              <div className="cart-quantity-container">
                <button
                  type="button"
                  className="quantity-controller-button"
                  onClick={() => decreaseQuantity({id,price})}
                >
                  <BsDashSquare color="#52606D" size={12} />
                </button>

                <p className="cart-quantity">{quantity}</p>

                <button
                  type="button"
                  className="quantity-controller-button"
                  onClick={() => increaseQuantity({id,price})}
                >
                  <BsPlusSquare color="#52606D" size={12} />
                </button>
              </div>

              <div className="total-price-delete-container">
                <p className="cart-total-price">Rs {price * quantity} /-</p>
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => deleteCartItem(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      }}
    </CartContext.Consumer>
  );
};
export default CartItem2
