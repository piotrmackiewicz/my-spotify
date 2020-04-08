import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 0 100px 0;
`

const StyledTitle = styled.h1`
  font-size: 10rem;
  color: white;
  text-shadow: 1px 1px 15px #131313;
`

function LoginHeader() {
  return (
    <Wrapper>
      <StyledTitle>MySpotify</StyledTitle>
    </Wrapper>
  )
}

export default LoginHeader
