import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyledLoginButton = styled(Button)`
  font-size: 3rem;
  padding: 20px 90px;
  border-radius: 2px;
  -webkit-box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
`

function LoginButton({ onClick }) {
  return (
    <StyledLoginButton onClick={onClick} variant="primary">
      Login
    </StyledLoginButton>
  )
}

export default LoginButton
