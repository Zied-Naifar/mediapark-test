import { createSelector } from "reselect";

export const selectSearchValue = createSelector(
  (state: any): object => state.images,
  (metaData: any): string => metaData.searchValue
);


export const selectImagesList = createSelector(
  (state: any): object => state.images,
  (metaData: any): string => metaData.images
);
