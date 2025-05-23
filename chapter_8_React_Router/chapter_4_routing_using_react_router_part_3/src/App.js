import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogsList from './components/BlogsList'
import BlogItemDetails from './components/BlogItemDetails'
import './App.css'

const App = () => (
  <BrowserRouter>
  <Header/>
  {/* <Switch>
  <Route exact path="/" element={<BlogsList/>} />
  <Route exact path='/About' element={<About/>}/>
  <Route exact path='/Contact' element={<Contact/>}/>
  <Route path='*' element={<NotFound />} />
  <Route path='blogs/:id' element={<BlogItemDetails/>} />
  </Switch> */}
  <Switch>
  <Route exact path="/" component={BlogsList} />
  <Route exact path='/About' component={About} />
  <Route exact path='/Contact' component={Contact} />
  <Route path='/blogs/:id' component={BlogItemDetails} />
  <Route path='*' component={NotFound} />
</Switch>  
  </BrowserRouter>
)

export default App
