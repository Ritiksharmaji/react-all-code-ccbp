import './index.css'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

const LogOutButton = () => {
  const history = useHistory()  // useHistory hook to access the history object

  console.log("logout button came")
  const logOut = () => {
    Cookies.remove('jwt_token')
    console.log('Successful logout')
    history.replace('/login')
  }

  return (
    <>
    <h1 onClick={logOut}>Please Login</h1>
    <div className='logout-button'>
    <button  onClick={logOut} >
      Logout
    </button>
     
    </div>
    
  
    </>

  )
   
}

export default LogOutButton
