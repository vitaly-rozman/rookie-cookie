import React from 'react'

import Logo from '../../components/Logo'

import { useDispatch } from 'react-redux'

import { authSignIn } from '../../redux/actions'
import { StyledLogin } from './styled'

const Login = () => {
  const dispatch = useDispatch()

  return (
    <StyledLogin>
    <div className="login-wrapper">
      <Logo />
      <h2>Welcome to RookieCookie!</h2>
      <button
        onClick={()=> dispatch(authSignIn({
          email: 'batman@rookiecookie.com',
          name: 'Bruce Wayne',
          image: 'https://theawesomer.com/photos/2010/06/060410_Facebook_profile_pic_1.jpg'
        }))}
      >
        Log in
      </button>
    </div>
    </StyledLogin>
  )
}

export default Login
