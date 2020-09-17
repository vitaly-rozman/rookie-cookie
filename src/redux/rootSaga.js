import { all } from 'redux-saga/effects'

import dataSaga from './sagas/data'
import authSaga from './sagas/auth'

export default function* rootSaga() {
  yield all([
    dataSaga(),
    authSaga(),
  ]);
};
