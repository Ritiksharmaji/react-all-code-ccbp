import {Link} from 'react-router-dom'
import './index.css'
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import LogOutButton from '../LogoutButton'

const Header = () => {
  
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          
        </ul>


       
      </div>
    </nav>
  )
}

export default withRouter(Header)
