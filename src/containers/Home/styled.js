import styled from 'styled-components'

export const Wrapper = styled.div `
  max-width: 1280px;
  margin: 65px auto 0;
  text-align: center;
  box-sizing: content-box;
`
export const GridWrapper = styled.div `
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(40px, 2fr));;
  grid-gap: 2rem;
`;