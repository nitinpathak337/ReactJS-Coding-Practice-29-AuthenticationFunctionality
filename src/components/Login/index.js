// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const login = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={login}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
