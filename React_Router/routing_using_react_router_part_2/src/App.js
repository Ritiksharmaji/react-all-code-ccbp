import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogsList from './components/BlogsList'

import './App.css'

const App = () => (
  <BrowserRouter>
  
  <Header/>
  <Routes>
  <Route exact path="/" element={<BlogsList/>} />
  <Route exact path='/About' element={<About/>}/>
  <Route exact path='/Contact' element={<Contact/>}/>
  <Route path='*' element={<NotFound />} />
  </Routes>
  
  </BrowserRouter>
)

export default App
