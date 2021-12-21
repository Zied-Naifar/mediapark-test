import { action } from "typesafe-actions";
import ActionTypes from "../constants/images.constants";

export const fetchImages = (payload) =>
  action(ActionTypes.FETCH_IMAGES.request, payload);

  export const setSearchValue = (payload) =>
  action(ActionTypes.SET_SEARCH_VALUE.request, payload);

  export const likeOrDislike = (payload) =>
  action(ActionTypes.LIKE_DISLIKE_IMAGE.request, payload);

  