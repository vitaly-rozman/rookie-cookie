import React from 'react'
import { ClassCardWrapper, ClassCardTextWrapper } from './styled'

const Card = ({content, id, removeFn}) => (
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

export default Card
