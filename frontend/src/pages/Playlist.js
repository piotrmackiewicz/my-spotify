import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPlaylist } from 'api/Playlists'
import LeftSideMenuLayout from 'components/layout/LeftSideMenuLayout'
import { Row, Col } from 'react-bootstrap'
import Loading from 'components/Loading'
import Header from 'components/Playlist/Header/index'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentContext, setCurrentQueue } from 'redux/actions/index'
import { addTrackToQueue, playNextTrack } from 'api/Me'

function Playlist() {
  const { playlistId } = useParams()
  const [playlistData, setPlaylistData] = useState(null)
  const [fetching, setFetching] = useState(true)
  const [loadingPlaylistPlayback, setLoadingPlaylistPlayback] = useState(false)

  const dispatch = useDispatch()
  const currentContext = useSelector((s) => s.currentContext)

  useEffect(() => {
    async function fetchData() {
      const response = await fetchPlaylist(playlistId)
      setPlaylistData(response.data)
      setFetching(false)
    }
    fetchData()
  }, [playlistId])

  const handlePlaylistPlay = async () => {
    const firstTrack = playlistData.tracks.shift()
    const { uri } = firstTrack.track
    setLoadingPlaylistPlayback(true)
    await addTrackToQueue(uri)
    await playNextTrack()
    setLoadingPlaylistPlayback(false)
    dispatch(setCurrentQueue(playlistData.tracks.map((t) => t.track)))
    dispatch(setCurrentContext(playlistData.uri))
  }

  if (fetching) return <Loading fullscreen="false" />

  return (
    <LeftSideMenuLayout>
      <Header
        image={playlistData.image}
        name={playlistData.name}
        description={playlistData.description}
        onPlaylistPlay={handlePlaylistPlay}
        loadingPlaylistPlayback={loadingPlaylistPlayback}
        isPlaying={playlistData.uri === currentContext}
      />
      <Row>
        <Col>
          <p>playlist items</p>
        </Col>
      </Row>
    </LeftSideMenuLayout>
  )
}

export default Playlist
