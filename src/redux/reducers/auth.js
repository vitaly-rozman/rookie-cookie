import { 
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
} from '../constants'

const defaultState = {
  isAuthenticated: false,
  user: {
    email: null,
    name: null,
    image: null
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return {
        isAuthenticated: true,
        user: action.data
      }
    case AUTH_SIGNOUT:
      return defaultState;
    default:
      return state;  
  }
}
