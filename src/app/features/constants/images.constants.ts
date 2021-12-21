import { generateActionTypes } from "../../utils/generic-saga";

const root = "app/Images/";

const FETCH_IMAGES = generateActionTypes(root, "FETCH_IMAGES");
const SET_SEARCH_VALUE = generateActionTypes(root, 'SET_SEARCH_VALUE');
const LIKE_DISLIKE_IMAGE = generateActionTypes(root, 'LIKE_DISLIKE_IMAGE');


const constants = {
  FETCH_IMAGES,
  SET_SEARCH_VALUE,
  LIKE_DISLIKE_IMAGE
};

export default constants;
