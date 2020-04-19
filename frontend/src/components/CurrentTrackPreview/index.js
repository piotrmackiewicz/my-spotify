import React, { useEffect, useState, useCallback } from 'react'
import { fetchCurrentlyPlayingTrack } from 'api/Me'
import Loading from 'components/Loading'
import Wrapper from './Wrapper'
import AlbumCover from './AlbumCover'
import TrackName from './TrackName'
import ArtistName from './ArtistName'
import PlayerButtons from './PlayerButtons'
import {
  playNextTrack,
  playPreviousTrack,
  playPlayback,
  pausePlayback,
} from 'api/Me'
import useInterval from 'hooks/useInterval'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack } from 'redux/actions/index'

function CurrentTrackPreview() {
  const [fetching, setFetching] = useState(true)
  const [trackId, setTrackId] = useState('')
  const [playing, setPlaying] = useState(false)

  const dispatch = useDispatch()
  const currentTrack = useSelector((s) => s.currentTrack)

  const fetchCurrentTrack = useCallback(async () => {
    const currentTrackResponse = await fetchCurrentlyPlayingTrack()
    const { data } = currentTrackResponse
    setPlaying(currentTrackResponse.data.isPlaying || false)
    const { id } = data
    if (trackId !== id) {
      dispatch(setCurrentTrack(data))
      setTrackId(id)
    }
    setFetching(false)
  }, [dispatch, trackId])

  useEffect(() => {
    fetchCurrentTrack()
  }, [fetchCurrentTrack])

  useInterval(() => {
    fetchCurrentTrack()
  }, 3000)

  const handlePrevClick = () => {
    playPreviousTrack().then((res) => {
      if (res.status === 204) {
        setTimeout(() => {
          fetchCurrentTrack()
        }, 300)
      }
    })
  }

  const handleNextClick = () => {
    playNextTrack().then((res) => {
      if (res.status === 204) {
        setTimeout(() => {
          fetchCurrentTrack()
        }, 300)
      }
    })
  }

  const handlePauseClick = () => {
    pausePlayback().then((res) => {
      if (res.status === 204) {
        setPlaying(false)
      }
    })
  }

  const handlePlayClick = () => {
    playPlayback().then((res) => {
      if (res.status === 204) {
        setPlaying(true)
      }
    })
  }

  if (fetching) {
    return <Loading fullscreen="false" />
  }

  if (!trackId) {
    return <p>No track is playing at the time</p>
  }

  return (
    <Wrapper>
      <AlbumCover src={currentTrack.album.image} />
      <TrackName>{currentTrack.name}</TrackName>
      <ArtistName>
        {currentTrack.artists.map((a) => a.name).join(', ')}
      </ArtistName>
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
