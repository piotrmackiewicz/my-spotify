import axios from 'axios'
import TokenStorage from 'utils/TokenStorage'

function fetchLoggedUserProfile() {
  return makeRequest('GET', '')
}

function fetchLoogedUserPlaylists() {
  return makeRequest('GET', '/playlists')
}

function fetchCurrentlyPlayingTrack() {
  return makeRequest('GET', '/player/currently-playing')
}

function playNextTrack() {
  return makeRequest('POST', '/player/next')
}

function playPreviousTrack() {
  return makeRequest('POST', '/player/previous')
}

function pausePlayback() {
  return makeRequest('PUT', '/player/pause')
}

function playPlayback() {
  return makeRequest('PUT', '/player/play')
}

function addTrackToQueue(uri) {
  return makeRequest('POST', '/player/queue', { uri })
}

function makeRequest(method, path, payload = {}) {
  const axiosRequestConfig = {
    method,
    url: `http://localhost:3030/api/me${path}`,
    headers: {
      'X-Crypted-Token': TokenStorage.getAccessToken(),
    },
  }
  if (method === 'POST' && Object.keys(payload).length !== 0) {
    axiosRequestConfig.data = { ...payload }
  }
  return axios(axiosRequestConfig)
}

export {
  fetchLoggedUserProfile,
  fetchLoogedUserPlaylists,
  fetchCurrentlyPlayingTrack,
  playNextTrack,
  playPreviousTrack,
  pausePlayback,
  playPlayback,
  addTrackToQueue,
}
