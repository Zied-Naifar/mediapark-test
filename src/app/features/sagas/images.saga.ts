/**
 * auth Sagas
 */

 import { takeEvery, put, call, takeLatest } from 'redux-saga/effects'
 import { ImagesActions } from '../reducers/images.reducer'
 import * as api from '../services/images.services'
 import ActionTypes from '../constants/images.constants'
 import ImagesActionTypes from '../constants/images.constants'
  
 
 export function* fetchImages(action: ImagesActions ) {
   try {
     console.log('action: ', action);
     const imagesResponse = yield call(api.fetchImages,  action.payload)
     yield put({
       type: ActionTypes.FETCH_IMAGES.success,
       payload: imagesResponse,
     })
   } catch (e) {
     console.log('e', e)
     yield put({ type: ActionTypes.FETCH_IMAGES.failure, e })
   }
 }
 
 export function* fetchImagesWatcher() {
   yield takeEvery(ActionTypes.FETCH_IMAGES.request, fetchImages)
 }

 export function* searchValue(action: ImagesActions ) {
  try {
    yield put({
      type: ActionTypes.SET_SEARCH_VALUE.success,
      payload: action.payload,
    })
  } catch (e) {
    console.log('e', e)
    yield put({ type: ActionTypes.SET_SEARCH_VALUE.failure, e })
  }
}

export function* searchValueWatcher() {
  yield takeLatest(ActionTypes.SET_SEARCH_VALUE.request, searchValue)
}

export function* likeOrDislike(action: ImagesActions ) {
  const result = yield call(api.fetchImages,  action.payload)

  try {
    yield put({
      type: ActionTypes.LIKE_DISLIKE_IMAGE.success,
      payload: result,
    })
  } catch (e) {
    console.log('e', e)
    yield put({ type: ActionTypes.LIKE_DISLIKE_IMAGE.failure, e })
  }
}

export function* likeOrDislikeWatcher() {
  yield takeLatest(ActionTypes.LIKE_DISLIKE_IMAGE.request, searchValueWatcher)
}


 
