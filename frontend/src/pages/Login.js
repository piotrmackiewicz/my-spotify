import React from 'react'
import { Row } from 'react-bootstrap'
import LoginButton from 'components/LoginButton'
import CenteredContent from 'components/shared/CenteredContent'
import LoginHeader from 'components/LoginHeader'
import styled from 'styled-components'
import loginBg from 'assets/login-bg.jpg'
import { getToken } from 'api/Authorization'
import useQuery from 'hooks/useQuery'
import TokenStorage from 'utils/TokenStorage'
import { useHistory } from 'react-router-dom'

const Background = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${loginBg});
    background-size: cover;
    filter: hue-rotate(110deg) brightness(75%);
  }
`

function Login() {
  let query = useQuery()
  const code = query.get('code')
  const history = useHistory()

  if (code) {
    getToken(code).then(({ data }) => {
      const { encryptedAccessToken, encryptedRefreshToken } = data
      TokenStorage.saveAll(encryptedAccessToken, encryptedRefreshToken, () => {
        history.push('/dashboard')
      })
    })
  }

  return (
    <Background>
      <CenteredContent fluid className="p-relative" fullscreen="true">
        <Row>
          <LoginHeader />
        </Row>
        <Row>
          <a href="http://localhost:3030/api/login">
            <LoginButton />
          </a>
        </Row>
      </CenteredContent>
    </Background>
  )
}

export default Login
