import { call, put, takeLatest } from 'redux-saga/effects'

import { API_ENDPOINT, API_KEY } from '../config'

import {
  DATA_FETCH,
  DATA_FETCH_ERROR,
  DATA_FETCH_SUCCESS,
} from './constants'

const getRecords = (keyword) => {
  const url = `${API_ENDPOINT}?key=${API_KEY}&q=${keyword}&image_type=photo`
  const results = fetch(url)
    .then(response => response.json())

  return results
}

function* fetchData({ keyword }) {
  try {
    const response = yield call(getRecords, keyword)

    yield put({type: DATA_FETCH_SUCCESS, data: response.hits })
  } catch (error) {
    yield put({ type: DATA_FETCH_ERROR, error })
  }
}

export default function* dataSaga() { return [
  yield takeLatest(DATA_FETCH, fetchData),
]}
