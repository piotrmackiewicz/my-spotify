import { SET_CURRENT_TRACK } from 'redux/constants/action-types'

export const setCurrentTrack = (currentTrack) => ({
  type: SET_CURRENT_TRACK,
  currentTrack,
})
