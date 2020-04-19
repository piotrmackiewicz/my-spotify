import React from 'react'
import Wrapper from './Wrapper'
import Background from './Background/index'
import Info from './Info/index'

function Header({ image, name, description, onPlaylistPlay }) {
  return (
    <Wrapper>
      <Background image={image} />
      <Info
        image={image}
        name={name}
        description={description}
        onPlayClick={onPlaylistPlay}
      />
    </Wrapper>
  )
}

export default Header
