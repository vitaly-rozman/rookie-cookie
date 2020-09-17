import styled from 'styled-components'

export const ClassCardWrapper = styled.div`
  width: 175px;
  height: 300px;
  display: block;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #dfe1e5;
  cursor: pointer;

  grid-column-start: span 3;
  grid-column-end: auto;
  grid-row-start: span 1;
  grid-row-end: auto;

  &:hover {
    box-shadow: 0 0 5px 0 gray;
  }

  img {
    object-fit: cover;
  }
`

export const ClassCardTextWrapper = styled.div`
  width: 100%;
  color: #70757a;

  h4, h5 {
    margin: 0px;
    padding: 5px;
    font: 12px arial,sans-serif;
  }

  .cardTitle {
    font-size: 13px;
    font-weight: bold;
    color: #202124;
  }
  
  .cardInstructor {
    color: #202124;
    font-weight: bold;
  }

  .cardDescription {
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`
