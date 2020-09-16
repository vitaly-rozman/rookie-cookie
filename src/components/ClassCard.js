import React from 'react'
import styled from 'styled-components'

const ClassCard = ({content, id, removeFn}) => (
  <ClassCardWrapper onClick={() => removeFn(id)}>
    <img height="50%" width="100%" src={content.featureImage} alt='' />
    <ClassCardTextWrapper>
      <h4 className="cardTitle">{content.title}</h4>
      <h5 className="cardInstructor">{content.instructor}</h5>
      <h5 className="cardDuration">{content.duration} min</h5>
      <h5 className="cardDescription">{content.description}</h5>
    </ClassCardTextWrapper>
  </ClassCardWrapper>
)

export default ClassCard

ClassCard.displayName = 'ClassCard'

const ClassCardWrapper = styled.div`
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

const ClassCardTextWrapper = styled.div`
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
