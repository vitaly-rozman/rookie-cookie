
import styled from 'styled-components'

export const NewClassWrapper = styled.div`
  width: 175px;
  height: 300px;
  display: block;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #dfe1e5;

  grid-column-start: span 3;
  grid-column-end: auto;
  grid-row-start: span 1;
  grid-row-end: auto;

  &:hover {
    box-shadow: 0 0 5px 0 gray;
  }

  img {
    height: 150px;
    object-fit: cover;
  }
`

export const NewClassImageWrapper = styled.div`
  margin-bottom: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -30px;

  input {
    width: 100px;  
  }
`

export const NewClassTextWrapper = styled.div`
  width: 100%;

  input {
    height: 18px;
    margin-top: 5px;

    &.error {
      border-color: #ffa1a1;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    cursor: pointer;
    margin: 5px;
  }
`
