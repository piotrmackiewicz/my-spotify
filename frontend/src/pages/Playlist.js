import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPlaylist } from 'api/Playlists'
import LeftSideMenuLayout from 'components/layout/LeftSideMenuLayout'
import { Row, Col } from 'react-bootstrap'
import Loading from 'components/Loading'
import Header from 'components/Playlist/Header/index'

function Playlist() {
  const { playlistId } = useParams()
  const [playlistData, setPlaylistData] = useState(null)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetchPlaylist(playlistId)
      setPlaylistData(response.data)
      setFetching(false)
    }
    fetchData()
  }, [playlistId])

  if (fetching) return <Loading fullscreen="false" />

  return (
    <LeftSideMenuLayout>
      <Header
        image={playlistData.image}
        name={playlistData.name}
        description={playlistData.description}
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
