import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="app-card">
      <div className="app-body">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/blogs/:id" component={BlogItemDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  </div>
)
export default App