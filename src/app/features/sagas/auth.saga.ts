/**
 * auth Sagas
 */

import { takeEvery, put, call } from 'redux-saga/effects'
import { AuthActions } from '../reducers/auth.reducer'
import * as api from '../services/auth.services'
import ActionTypes from '../constants/auth.constants'
 import history from '../../utils/history'

export function* authenticate(action: AuthActions | any) {
  try {
    const authResponse = yield call(api.authenticate)
    yield put({
      type: ActionTypes.AUTHENTICATE.success,
      data: authResponse,
    })
  } catch (e) {
    console.log('e', e)
    yield put({ type: ActionTypes.AUTHENTICATE.failure, e })
  }
}

export function* authenticateWatcher() {
  yield takeEvery(ActionTypes.AUTHENTICATE.request, authenticate)
}

export function* getToken(action: AuthActions | any) {
  try {
    const authResponse = yield call(api.getToken)
    yield put({
      type: ActionTypes.GET_TOKEN.success,
      payload: authResponse,
    })
    history.push('/images')
  } catch (e) {
    console.log('e', e)
    yield put({ type: ActionTypes.GET_TOKEN.failure, e })
  }
}

export function* getTokenWatcher() {
  yield takeEvery(ActionTypes.GET_TOKEN.request, getToken)
}

