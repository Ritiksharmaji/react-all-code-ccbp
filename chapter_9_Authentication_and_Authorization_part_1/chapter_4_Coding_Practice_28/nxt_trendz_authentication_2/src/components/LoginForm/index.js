import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorSMS: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  onsubmitSucess = jwt_token => {
    const {history} = this.props
    history.replace('/')
    console.log('Redirecting to home page...')
    //storing into cookie
    Cookies.set('jwt_token', jwt_token, {
      expires: 30,
    })
  }

  onsubmitError = errordata => {
    console.log(errordata.error_msg)

    this.setState({
      showSubmitError: true,
      errorSMS: errordata.error_msg,
    })
  }
  submitPrevent = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        // step-1: Login successful
        console.log('Login successful:', data)
        // this.onsubmitSucess()
        // step-3: storing the jwt
        this.onsubmitSucess(data.jwt_token)
      } else {
        // step-2: handle the error sms
        console.error('Login failed:', data)
        this.onsubmitError(data)
      }
    } catch (error) {
      console.error('Error occurred:', error.message)
    }
  }

  render() {
    const {errorSMS, showSubmitError} = this.state
    const jwt_token = Cookies.get('jwt_token')
    if (jwt_token !== undefined) {
      return <Redirect to="/" />
    }

    console.log(errorSMS)
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitPrevent}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorSMS}</p>}
        </form>
      </div>
    )
  }
}

// export default LoginForm
export default LoginForm
