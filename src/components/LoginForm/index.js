import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  usernameField = () => {
    const {username} = this.state
    return (
      <div>
        <label htmlFor="usernameId">USERNAME</label>
        <input
          id="usernameId"
          type="text"
          value={username}
          onChange={this.onchangeUsername}
          placeholder="Username"
        />
      </div>
    )
  }

  passwordField = () => {
    const {password} = this.state
    return (
      <div>
        <label htmlFor="passwordId">PASSWORD</label>
        <input
          id="passwordId"
          type="password"
          value={password}
          onChange={this.onchangePassword}
          placeholder="Password"
        />
      </div>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="overall">
        <div className="inside-overall">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form className="form-box" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-setting"
            />
            <div>{this.usernameField()}</div>
            <div>{this.passwordField()}</div>
            <button type="submit">Login</button>
            {showSubmitError && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
