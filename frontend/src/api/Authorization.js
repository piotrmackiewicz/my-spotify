import axios from 'axios'

export function login() {
  return axios({
    method: 'GET',
    url: 'http://localhost:3030/api/login',
  })
}

export function getToken(code) {
  return axios({
    method: 'POST',
    url: 'http://localhost:3030/api/token',
    data: {
      code,
    },
  })
}
