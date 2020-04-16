import axios from 'axios'
import TokenStorage from 'utils/TokenStorage'

function fetchPlaylist(playlistId) {
  return makeRequest('GET', `/${playlistId}`)
}

function makeRequest(method, path, payload = {}) {
  const axiosRequestConfig = {
    method,
    url: `http://localhost:3030/api/playlists${path}`,
    headers: {
      'X-Crypted-Token': TokenStorage.getAccessToken(),
    },
  }
  if (method === 'POST' && Object.keys(payload).length !== 0) {
    axiosRequestConfig.data = { ...payload }
  }
  return axios(axiosRequestConfig)
}

export { fetchPlaylist }
