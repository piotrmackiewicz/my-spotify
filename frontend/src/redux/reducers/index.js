import initialState from 'redux/store/initialState'
import {
  SET_CURRENT_TRACK,
  SET_CURRENT_CONTEXT,
  SET_CURRENT_QUEUE,
} from 'redux/constants/action-types'

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return { ...state, currentTrack: action.currentTrack }
    case SET_CURRENT_CONTEXT:
      return { ...state, currentContext: action.uri }
    case SET_CURRENT_QUEUE:
      return { ...state, currentQueue: action.items }
    default:
      return state
  }
}

export default rootReducer
