import {
  DATA_FETCH,
  DATA_FETCH_ERROR,
  DATA_FETCH_SUCCESS,
  DATA_RESET
} from '../constants'

  const defaultState = {
    images: [],
    inProgress: false,
  }
  
  export default (state = defaultState, action) => {
    switch (action.type) {
      case DATA_FETCH:
        return {
          ...state,
          inProgress: true
        }
      case DATA_FETCH_SUCCESS:
        return {
          ...state,
          images: action.data,
          inProgress: false,
        }
      case DATA_FETCH_ERROR:
      case DATA_RESET:
        return defaultState
      default:
        return state
    }
  }
  