import React from 'react'
import Wrapper from './Wrapper'
import Background from './Background/index'
import Info from './Info/index'

function Header({
  image,
  name,
  description,
  onPlaylistPlay,
  loadingPlaylistPlayback,
  isPlaying,
}) {
  return (
    <Wrapper>
      <Background image={image} />
      <Info
        image={image}
        name={name}
        description={description}
        onPlayClick={onPlaylistPlay}
        loadingPlaylistPlayback={loadingPlaylistPlayback}
        isPlaying={isPlaying}
      />
    </Wrapper>
  )
}

export default Header
