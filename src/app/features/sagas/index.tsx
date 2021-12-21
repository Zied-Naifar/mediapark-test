/**
 * Combine  Sagas  watcher
 */

import { all } from "redux-saga/effects";

import {  authenticateWatcher, getTokenWatcher } from "./auth.saga";
import {fetchImagesWatcher, likeOrDislikeWatcher, searchValueWatcher} from './images.saga'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([authenticateWatcher(), fetchImagesWatcher(), searchValueWatcher(), getTokenWatcher(), likeOrDislikeWatcher()]);
}
