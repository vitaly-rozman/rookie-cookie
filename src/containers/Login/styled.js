import styled from "styled-components"

export const StyledLogin = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .login-wrapper {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 250px;
    padding: 20px;
    margin: auto;
    background-color: #2E353D;

    svg {
      height: 100px;
    }
    h2 {
      color: #fff;
    }

    button {
      height: 30px;
      margin-bottom: 10px;
      margin-top: auto;
      cursor: pointer;
    }
  }
`
