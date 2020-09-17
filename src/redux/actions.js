import {
  DATA_FETCH,
  DATA_RESET,
  AUTH_SIGNIN,
  AUTH_SIGNOUT
} from './constants';

const dataFetch = (keyword) => ({ type: DATA_FETCH, keyword })

const dataReset = () => ({ type: DATA_RESET })

const authSignIn = (data) => ({ type: AUTH_SIGNIN, data })
const authSignOut = () => ({ type: AUTH_SIGNOUT })

export {
  authSignIn,
  authSignOut,
  dataFetch, 
  dataReset
}
