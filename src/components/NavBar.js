import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const NavBar = props => {
  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          <Logo />
        </HeaderItem>
        <HeaderItem onClick={() => props.addFn()}>
          Add More Classes
        </HeaderItem>
      </HeaderMenu>
    </Header>
  )
}
export default NavBar

NavBar.displayName = 'NavBar'

const Header = styled.header`
  background-color: #2E353D;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  box-shadow: 0 0 5px 0 gray;
`
const HeaderMenu = styled.div`
  height: 100%;
  width: 1280px;
  margin: 0px auto;
  align-items: center;
  display: flex;
  flex-direction: row;
`
const HeaderItem = styled.div`
  color: white;
  line-height: 18px;
  padding: 0px 20px 0px;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
`
