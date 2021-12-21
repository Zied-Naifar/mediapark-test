import { action } from 'typesafe-actions'
import ActionTypes from '../constants/auth.constants'

export const authenticate = () => action(ActionTypes.AUTHENTICATE.request)

export const getToken = (payload) => action(ActionTypes.GET_TOKEN.request, payload)

export const logout = () => action(ActionTypes.LOG_OUT)