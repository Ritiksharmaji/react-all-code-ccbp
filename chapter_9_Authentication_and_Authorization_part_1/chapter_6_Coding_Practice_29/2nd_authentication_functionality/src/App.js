
import Login from "./components/Login"
import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import NotFound from "./components/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import { Switch ,Route } from "react-router-dom"

const App = () => {

  return(
    <>
    <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route path="*" component={NotFound}/>
    </Switch>
    
    
    </>
  )
}

export default App
