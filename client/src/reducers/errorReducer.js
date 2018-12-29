import { GET_ERRORS } from '../actions/types'

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      // payload will include the errors object from server (came from component before)
      return action.payload;
    default:
      return state;
  }
}