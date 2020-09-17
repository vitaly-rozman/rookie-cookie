import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { authSignOut } from '../../redux/actions'

import Logo from '../Logo'

import {
  Header,
  HeaderMenu,
  HeaderItem,
  HeaderProfile
} from './styled'

const NavBar = props => {
  const dispatch = useDispatch()
  const { auth:{user} } = useSelector(state => state)

  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          <Logo />
        </HeaderItem>
        <HeaderItem onClick={() => props.addFn()}>
          Add More Classes
        </HeaderItem>
        <div className="right-aligned">
          <HeaderProfile>
            {user.name}
            <img src={user.image} alt={user.name} />
          </HeaderProfile>
          <HeaderItem onClick={() => dispatch(authSignOut())}>
            Logout
          </HeaderItem>
        </div>
      </HeaderMenu>
    </Header>
  )
}
export default NavBar
