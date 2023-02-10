// sagas.js

import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/data');
    yield put({ type: 'FETCH_SUCCESS', data: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', error });
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCH_REQUEST', fetchData);
}
