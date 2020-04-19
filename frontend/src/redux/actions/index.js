import {
  SET_CURRENT_TRACK,
  SET_CURRENT_CONTEXT,
  SET_CURRENT_QUEUE,
} from 'redux/constants/action-types'

export const setCurrentTrack = (currentTrack) => ({
  type: SET_CURRENT_TRACK,
  currentTrack,
})

export const setCurrentContext = (uri) => ({
  type: SET_CURRENT_CONTEXT,
  uri,
})

export const setCurrentQueue = (items) => ({
  type: SET_CURRENT_QUEUE,
  items,
})
