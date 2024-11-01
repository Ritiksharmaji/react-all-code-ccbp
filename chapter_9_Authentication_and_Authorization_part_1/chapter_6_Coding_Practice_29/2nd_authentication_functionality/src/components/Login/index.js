import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

class Login extends Component {

  

  submitPrevent = () => {
    const jwt_token = Cookies.get('jwt_token')
    if (jwt_token === undefined) {
      const data = 'login done'  // Simulating a successful login response
        console.log('Login successful:', data)
        const { history } = this.props
        history.replace('/')
        console.log('Redirecting to home page...')
        // Storing JWT token into cookie
        Cookies.set('jwt_token', data, {
          expires: 30,
        })
    }
  }

  render() {
    const jwt_token = Cookies.get('jwt_token')
    if (jwt_token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <h1>Please Login</h1>
        <button onClick={this.submitPrevent}>
        Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
