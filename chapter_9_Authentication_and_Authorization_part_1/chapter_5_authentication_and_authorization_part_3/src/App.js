import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
     
      <Route exact path="/login" component={LoginForm} />
      {/* <ProtectedRoute /> */}
      <ProtectedRoute exact path="/" component={Home} />
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} /> */}
      <ProtectedRoute exact path="/products" component={Products}  />
      <ProtectedRoute exact path="/cart" component={Cart} />
      {/* <Route component={NotFound} /> */}
      {/* <NotFound/> */}
      <Route path="/not-found" component={NotFound}/>
      <Redirect to="/not-found"/>
      
    </Switch>
  </BrowserRouter>
)

export default App
