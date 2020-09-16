import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { classList } from '../data/classes'
import ClassCard from '../components/ClassCard'
import NewClassCard from '../components/NewClassCard'
import NavBar from '../components/NavBar'

const App = () => {
  const [classes, setClasses] = useState([])

  const addClasses = (newClass) => {

    if (newClass !== undefined) {
      setClasses([...classes, newClass])
    } else {
      setClasses([...classes, ...classList])
    }

  }

  const removeClass = (id) => {
    let obj = [ ...classes ];

    obj.splice(id, 1)
    setClasses(obj)
  }

  useEffect(() => {
    setClasses(classList)
  }, [])

  return (
    <Wrapper>
      <NavBar addFn={addClasses} />
      <h1>Welcome to RookieCookie!</h1>
      <GridWrapper>
        <NewClassCard id={classes.length + 1} addFn={addClasses} />
        {
          classes.map((klass, id) => <ClassCard key={id} content={klass} removeFn={removeClass} id={id} />)
        }
      </GridWrapper>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div `
  max-width: 1280px;
  margin: 65px auto 0;
  text-align: center;
  box-sizing: content-box;
`
const GridWrapper = styled.div `
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(40px, 2fr));;
  grid-gap: 2rem;
`;
