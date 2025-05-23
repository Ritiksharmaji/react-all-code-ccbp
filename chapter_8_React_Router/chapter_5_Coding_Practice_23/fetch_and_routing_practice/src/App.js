import {Route, Switch,BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'


import './App.css'

const App = () => (
 
  <div className="app-container">
    <div className="responsive-container">
        <Header />
          <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route path='/blogs/:id' component={BlogItemDetails} />
            <Route path='*' component={NotFound} />
          </Switch>
        
          </div>
    </div>
  </div>
  
)

export default App
