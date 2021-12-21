import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./auth.reducer";
import imagesReducer from "./images.reducer";
import history from "../../utils/history";

const createReducer = (injectedReducers = {}): object | any => {
  const rootReducer = combineReducers({
    auth: authReducer,
    images: imagesReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
};
export default createReducer;
