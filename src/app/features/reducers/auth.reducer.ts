/**
 * auth reducer
 */

import { getToken } from "../actions/auth.actions";

import ActionTypes from "../constants/auth.constants";
import { ActionType } from "typesafe-actions";
import produce from "immer";

export type AuthActions = ActionType<typeof getToken>;

interface IAuthState {
  accessToken: string;
  scope: string;
  loading: boolean;
}

// The initial state of the reducer
export const initialState: IAuthState = {
  accessToken: "",
  scope: "",
  loading: false,
};

const authReducer = (
  state: IAuthState = initialState,
  action: AuthActions
): IAuthState =>
  produce(state, (draft: IAuthState) => {
    switch (action.type) {
      case ActionTypes.GET_TOKEN.request:
        draft.loading = true;
        break;
      case ActionTypes.GET_TOKEN.success:
        draft.loading = false;
        draft.accessToken = action.payload.access_token;
        draft.scope = action.payload.scope;
        break;
      case ActionTypes.GET_TOKEN.failure:
        draft.loading = false;
        break;

        case ActionTypes.LOG_OUT:
          draft.accessToken = '';
          draft.scope = '';
          break;
  
    }
  });

export default authReducer;
