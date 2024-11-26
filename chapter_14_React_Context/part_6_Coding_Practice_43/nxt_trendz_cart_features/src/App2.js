import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails/index2'
import Cart from './components/Cart/index2'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext2'
import './App.css'
import React, {Component} from 'react'

// const App = () => (
class App extends Component{

  state= {
    cartList:[],
    totalAmount:0,
    productAmount:0,
  }

  addCartItem = (product)=>{

    this.setState(pre=>({
      cartList:[...pre.cartList, product]
    }))
  
  }
 
  deleteCartItem = (id) => {
    console.log(id)
    this.setState((prevState) => ({
      cartList: prevState.cartList.filter((item) => item.id !== id),
    }));
  };

  updateCartItemQuantity = updatedItem => {
    this.setState(prevState => {
      const updatedCartList = prevState.cartList.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      );
      return { cartList: updatedCartList };
    });
  };

  increaseQuantity = ({id,price}) => {
    this.setState(prevState => {
      const updatedCartList = prevState.cartList.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
  
      return { cartList: updatedCartList };
    });
    this.setState(pre=>({
      totalAmount: pre.totalAmount  + price 
    }))
  };
  
  decreaseQuantity = ({id,price}) => {
    this.setState(prevState => {
     
      const updatedCartList = prevState.cartList.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      
  
      return { cartList: updatedCartList };
    });
    
    this.setState(pre=>({
      totalAmount: pre.totalAmount -price 
    }))
  };
  

  deleteAllCart = ()=>{
    this.setState({
      cartList: [],
    })
  }
  
  totalAmountfunction = (amount)=>{
  this.setState(pre=>({
    totalAmount: pre.totalAmount + amount,
  }))
  }

  amountIncresse = (cartItemDetails) =>{
    const {title, brand, quantity, price, imageUrl,id} = cartItemDetails
    this.setState(pre=>({
      totalAmount: pre.totalAmount + price,


    }))
  }

  amountDecrease = (cartItemDetails)=>{
    const {quantity, price, id} = cartItemDetails
    this.setState(pre=>({
      totalAmount: pre.totalAmount - price
    }))
  }

  productAmountFunction = (id)=>{
    
  }

  render(){
    const{cartList,totalAmount , productAmount} = this.state;

    console.log(`total-amount:${totalAmount}`)
    return(
      <BrowserRouter>
      <CartContext.Provider
  value={{
    cartList,
    addCartItem: this.addCartItem,
    deleteCartItem: this.deleteCartItem,
    updateCartItemQuantity: this.updateCartItemQuantity,
    deleteAllCart: this.deleteAllCart,
    increaseQuantity: this.increaseQuantity,
    decreaseQuantity: this.decreaseQuantity,
    totalAmount,
    amountIncresse: this.amountIncresse,
    amountDecrease: this.amountDecrease,
    totalAmountfunction:this.totalAmountfunction,
  }}
>
      <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
        
      </BrowserRouter>
    )
  }
}
 


export default App
