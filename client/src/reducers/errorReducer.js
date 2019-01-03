import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types'

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      // payload will include the errors object from server (came from component before)
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}