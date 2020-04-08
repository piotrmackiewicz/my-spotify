class TokenStorage {
  static saveAll(accessToken, refreshToken, callback) {
    localStorage.setItem('encryptedAccessToken', accessToken)
    localStorage.setItem('encryptedRefreshToken', refreshToken)
    callback()
  }

  static getAccessToken() {
    return localStorage.getItem('encryptedAccessToken')
  }

  static getRefreshToken() {
    return localStorage.getItem('encryptedRefreshToken')
  }
}

export default TokenStorage
