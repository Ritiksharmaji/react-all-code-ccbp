import {Link} from 'react-router-dom'
import './index.css'
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const logOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    console.log('succeful logout')
    // return<Redirect to='/login' />
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-desktop-btn" onClick={logOut}>
          Logout
        </button>
        <button type="button" className="logout-mobile-btn" onClick={logOut}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
