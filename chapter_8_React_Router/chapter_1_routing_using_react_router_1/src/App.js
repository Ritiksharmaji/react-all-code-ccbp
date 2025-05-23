import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter } from 'react-router-dom'
import { Route ,Routes} from 'react-router-dom'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
  
  <Header/>
  <Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/About' element={<About/>}/>
  <Route exact path='/Contact' element={<Contact/>}/>
  <Route path='*' element={<NotFound />} />
  </Routes>
  
  </BrowserRouter>
)

export default App
