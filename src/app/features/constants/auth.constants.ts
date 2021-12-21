import { generateActionTypes } from '../../utils/generic-saga'

const root = 'app/Auth/'

const AUTHENTICATE = generateActionTypes(root, 'AUTHENTICATE')
const GET_TOKEN = generateActionTypes(root, 'GET_TOKEN')
const LOG_OUT = 'LOG_OUT'

const constants = {
  AUTHENTICATE,
  GET_TOKEN,
  LOG_OUT
}

export default constants
