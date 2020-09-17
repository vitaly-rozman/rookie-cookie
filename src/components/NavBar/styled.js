
import styled from 'styled-components'

export const Header = styled.header`
  background-color: #2E353D;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  box-shadow: 0 0 5px 0 gray;
`
export const HeaderMenu = styled.div`
  height: 100%;
  width: 1280px;
  margin: 0px auto;
  align-items: center;
  display: flex;
  flex-direction: row;

  .right-aligned {
    margin: 0px 20px 0px auto;
    display: flex;
    flex-direction: row;
  }
`
export const HeaderItem = styled.div`
  color: white;
  line-height: 30px;
  padding: 0px 20px 0px;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
`

export const HeaderProfile = styled.div `
  line-height: 30px;
  font-weight: 600;
  color: #fff;
  display: flex;
  flex-direction: row;

  img {
    height: 30px;
    margin: 0px 5px;
  }
`