import initialState from 'redux/store/initialState'
import { SET_CURRENT_TRACK } from 'redux/constants/action-types'

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return { ...state, currentTrack: action.currentTrack }
    default:
      return state
  }
}

export default rootReducer
