import {Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'


import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          {/* <Route exact path="/" component={<Home/>} />
          <Route exact path="/about" component={<About/>} />
          <Route exact path="/contact" component={<Contact/>} />
          <Route component={NotFound} /> */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route component={NotFound} />
         
        </Routes>
      </div>
    </div>
  </div>
)

export default App
