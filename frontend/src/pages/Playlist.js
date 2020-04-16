import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPlaylist } from 'api/Playlists'
import LeftSideMenuLayout from 'components/layout/LeftSideMenuLayout'
import { Row, Col } from 'react-bootstrap'

function Playlist() {
  const { playlistId } = useParams()

  useEffect(async () => {
    const playlist = await fetchPlaylist(playlistId)
  }, [])

  const rendeContent = () => (
    <Row>
      <Col>
        <p>playlist</p>
      </Col>
    </Row>
  )

  return <LeftSideMenuLayout>{rendeContent()}</LeftSideMenuLayout>
}

export default Playlist
