import React, { useEffect, useState } from 'react'
import { fetchCurrentlyPlayingTrack } from 'api/Me'
import Loading from 'components/Loading'
import Wrapper from './Wrapper'
import AlbumCover from './AlbumCover'
import TrackName from './TrackName'
import ArtistName from './ArtistName'
import PlayerButtons from './PlayerButtons'
import { playNextTrack, playPreviousTrack, playPlayback, pausePlayback } from 'api/Me'
import useInterval from 'hooks/useInterval'

function CurrentTrackPreview() {
  const [fetching, setFetching] = useState(true)
  const [track, setTrack] = useState(null)
  const [playing, setPlaying] = useState(false)

  const fetchCurrentTrack = async () => {
    const currentTrackResponse = await fetchCurrentlyPlayingTrack()
    const { data } = currentTrackResponse;
    setPlaying(currentTrackResponse.data.isPlaying || false)
    setTrack(currentTrackResponse.data)
  }

  useEffect(() => {
    fetchCurrentTrack()
  }, [])

  useEffect(() => {
    if (track) {
      setFetching(false)
    }
  }, [track])

  useInterval(() => {
    fetchCurrentTrack()
  }, 3000)

  const handlePrevClick = () => {
    playPreviousTrack().then(res => {
      if (res.status === 204) {
        setTimeout(() => {
          fetchCurrentTrack()
        }, 300)
      }
    })
  }

  const handleNextClick = () => {
    playNextTrack().then(res => {
      if (res.status === 204) {
        setTimeout(() => {
          fetchCurrentTrack()
        }, 300)
      }
    })
  }

  const handlePauseClick = () => {
    pausePlayback().then(res => {
      if (res.status === 204) {
        setPlaying(false)
      }
    })
  }

  const handlePlayClick = () => {
    playPlayback().then(res => {
      if (res.status === 204) {
        setPlaying(true)
      }
    })
  }

  if (fetching) {
    return <Loading fullscreen={false} />
  }

  if (track && !track.id) {
    return <p>No track is playing at the time</p>
  }

  return (
    <Wrapper>
      <AlbumCover src={track.album.image} />
      <TrackName>{track.name}</TrackName>
      <ArtistName>{track.artists.map((a) => a.name).join(', ')}</ArtistName>
      <PlayerButtons
        playing={playing}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        onPauseClick={handlePauseClick}
        onPlayClick={handlePlayClick}
      />
    </Wrapper>
  )
}

export default CurrentTrackPreview
