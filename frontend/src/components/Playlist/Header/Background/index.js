import React from 'react'
import Wrapper from './Wrapper'
import Gradient from './Gradient'

function Background({ image }) {
  return (
    <Wrapper image={image}>
      <Gradient />
    </Wrapper>
  )
}

export default Background
