import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { dataFetch, dataReset } from '../../redux/actions'
import { classTemplate, formFields } from '../../data/classes'

import { NewClassWrapper, NewClassImageWrapper, NewClassTextWrapper } from './styled'

const NewCard = ({addFn, id}) => {
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

export default NewCard
