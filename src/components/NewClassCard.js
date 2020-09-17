import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { dataFetch, dataReset } from '../redux/actions'
import { classTemplate, formFields } from '../data/classes'

const NewClassCard = ({addFn, id}) => {
  const [newClass, setNewClass] = useState(classTemplate)
  const [formErrors, setErrors] = useState([])
  const [imageIndex, setImageIndex] = useState([])
  const [imageKeyword, setImageKeyword] = useState('')
  
  const { data } = useSelector(state => state)
  const dispatch = useDispatch()

  /**
   * Updates value on change
   */
  const updateValue = (key, value) => {
    setErrors(formErrors.filter(err => err !== key))
    setNewClass({...newClass, [key]: value})
  }

  /**
   * Validates form before adding to the state/store
   */
  const validateForm = () => {
    const errors = []

    formFields.forEach(field => {
      const regex = RegExp(field.regExp);

      if (regex.test(newClass[field.key])){
        errors.push(field.key)
      }

    })

    return errors
  }

  /**
   * Submits new card form
   */
  const saveCard = () => {
    const errors = validateForm()

    if (errors.length === 0) {
      const featureImage = data.images.length ? data.images[imageIndex].previewURL : newClass.featureImage

      addFn({...newClass, id, featureImage})
      resetCard()
    } else {
      setErrors(errors)
    }
  }

  /**
   * Resets new cards form
   */
  const resetCard = () => {
    setNewClass(classTemplate)
    setErrors([])
    setImageIndex(0)
    setImageKeyword('')
    dispatch(dataReset())
  }

  /**
   * Image search dispatcher
   */
  const imageSearch = (keyword) => {
    setImageKeyword(keyword)

    // search only when keyword is at least 3 letters long
    if (keyword.length >= 3) {
      dispatch(dataFetch(keyword))
      setImageIndex(0)
    } else if (keyword.length === 0) {
      dispatch(dataReset())
    }

  }

  return (
    <NewClassWrapper>
        <img
          height="50%"
          width="100%"
          src={data.images.length ? data.images[imageIndex].previewURL : newClass.featureImage}
          alt=''
        />
        <NewClassImageWrapper>
          <input
            placeholder='Image search'
            value={imageKeyword}
            onChange={(e) => imageSearch(e.target.value)}
          />
          <button
            disabled={imageIndex === 0}
            onClick={() => setImageIndex(imageIndex - 1)}
          >
            &lt;
          </button>
          <button
            disabled={imageIndex + 1 === data.images.length}
            onClick={() => setImageIndex(imageIndex+1)}
          >
            &gt;
          </button>
      </NewClassImageWrapper>
      <NewClassTextWrapper>
        {
          formFields.map(field => (
            <input
              className={formErrors.includes(field.key) ? 'error' : ''}
              key={field.key}
              placeholder={field.placeholder}
              value={newClass[field.key]}
              onChange={(e) => updateValue(field.key, e.target.value)}
            />
          ))
        }
        <div className="buttons">
          <button onClick={() => saveCard()}>Save</button>
          <button onClick={() => resetCard()}>Clear</button>
        </div>
      </NewClassTextWrapper>
    </NewClassWrapper>
  )
}

export default NewClassCard

NewClassCard.displayName = 'NewClassCard'

const NewClassWrapper = styled.div`
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

const NewClassImageWrapper = styled.div`
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

const NewClassTextWrapper = styled.div`
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
