import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'

const PlaylistImage = styled.img`
  width: 200px;
`

function Image({ url }) {
  return (
    <Wrapper>
      <PlaylistImage src={url} />
    </Wrapper>
  )
}

export default Image
