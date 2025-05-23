import Header from '../Header'
import './index.css'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import LogOutButton from '../LogoutButton'

const Home = () => {
  const jwt_token = Cookies.get('jwt_token')
  if (jwt_token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Home Route</h1>
          {/* Add LogOutButton below the heading */}
         <div className='logout-button'>
         <LogOutButton />
         </div>
        </div>
       
        
      </div>
    </>
  )
}

export default Home
