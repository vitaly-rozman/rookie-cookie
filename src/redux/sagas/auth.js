import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { Cookies } from "react-cookie"

import { 
  AUTH_SIGNIN,
  AUTH_SIGNOUT
} from '../constants';

export function* userSignIn({data}) {
  // write to cookies with expiration in 24h
  let d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000));

  const cookies = new Cookies();
  cookies.set("user", JSON.stringify(data), {path: "/", expires: d});

  if (data.email) {
    yield put(push('/'));
  }
}

export function userSignOut() {
  const cookies = new Cookies();
  cookies.remove("user");
}

export default function* loginSaga() { return [
  yield takeLatest(AUTH_SIGNIN, userSignIn),
  yield takeLatest(AUTH_SIGNOUT, userSignOut)
]};
