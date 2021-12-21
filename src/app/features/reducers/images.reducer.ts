import * as actions from "../actions/images.actions";

import ActionTypes from "../constants/images.constants";
import { ActionType } from "typesafe-actions";
import produce from "immer";
import { saveSearchValues } from "../../utils/storage";

export type ImagesActions = ActionType<typeof actions>;

interface IImages {
  id: string;
}

interface IImagesState {
  images: IImages[];
  total: number;
  total_pages: number;
  loading: {
    searchLoading: boolean;
    likeOrDislike: boolean;
  };
  searchValue: string;
}

export const initialState: IImagesState = {
  images: [],
  total: 0,
  total_pages: 0,
  loading: {
    searchLoading: false,
    likeOrDislike: false,
  },
  searchValue: "",
};

const ImagesReducer = (
  state: IImagesState = initialState,
  action: ImagesActions
): IImagesState =>
  produce(state, (draft: IImagesState) => {
    switch (action.type) {
      case ActionTypes.SET_SEARCH_VALUE.success:
        draft.searchValue = action.payload;
        break;
      case ActionTypes.FETCH_IMAGES.request:
        draft.loading.searchLoading = true;
        saveSearchValues(action.payload);
        break;
      case ActionTypes.FETCH_IMAGES.success:
        draft.loading.searchLoading = false;
        draft.images = action.payload.results;
        draft.total = action.payload.total;
        draft.total_pages = action.payload.total_pages;
        break;
      case ActionTypes.FETCH_IMAGES.failure:
        draft.loading.searchLoading = false;
        break;

      case ActionTypes.LIKE_DISLIKE_IMAGE.request:
        draft.loading.likeOrDislike = false;
        break;
      case ActionTypes.LIKE_DISLIKE_IMAGE.success:
        draft.loading.likeOrDislike = false;
        break;
      case ActionTypes.LIKE_DISLIKE_IMAGE.failure:
        draft.loading.likeOrDislike = false;
        break;
    }
  });

export default ImagesReducer;
