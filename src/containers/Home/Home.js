import React, { useEffect, useState } from 'react';

import ClassCard from '../../components/Card/'
import NewClassCard from '../../components/NewCard/'
import NavBar from '../../components/NavBar/'

import { Wrapper, GridWrapper } from './styled'
import { classList } from '../../data/classes'

const Home = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    setClasses(classList)
  }, [])

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

export default Home
