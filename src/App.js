import React  from 'react'
import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom"

import { Cookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'

import { authSignIn } from './redux/actions'

import Home from './containers/Home'
import Login from './containers/Login'

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route {...props} render={() => (
    props.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

const App = (props) => {
  const dispatch = useDispatch()

  // read user info from cookies
  const userCookies = (new Cookies()).get("user")

  // we need this after user logged in
  const { auth } = useSelector(state => state)

  const isAuthenticated = userCookies !== undefined || auth.isAuthenticated

  if ( !auth.isAuthenticated && userCookies !== undefined ) {
    dispatch(authSignIn(userCookies));
  }

  return (
    <Switch>
      <Route
        exact
        path='/login'
        render={(props) => <Login {...props} />}
      />
      <PrivateRoute
        exact
        path='/'
        component={Home} 
        isAuthenticated={isAuthenticated}
      />
      <Redirect to='/' />
    </Switch>
  )
}

export default App
