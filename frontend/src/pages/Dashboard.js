import React, { useState, useEffect } from 'react'
import { fetchLoggedUserProfile, fetchLoogedUserPlaylists } from 'api/Me'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Welcome from 'components/dashboard/Welcome'
import Loading from 'components/Loading'
import LeftSideMenuLayout from 'components/layout/LeftSideMenuLayout'
import Playlists from 'components/dashboard/Playlists'

function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [userProfile, setUserProfile] = useState({})
  const [userPlaylists, setUserPlaylists] = useState([])

  useEffect(async () => {
    const userProfileResponse = await fetchLoggedUserProfile()
    setUserProfile(userProfileResponse.data)
    const userPlaylistsResponse = await fetchLoogedUserPlaylists()
    setUserPlaylists(userPlaylistsResponse.data.items)
    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />
  }

  const renderPlaylists = () => {
    if (userPlaylists.length < 1) {
      return <p>No playlists...</p>
    }

    return (
      <Row>
        <Col>
          <Playlists playlists={userPlaylists} />
        </Col>
      </Row>
    )
  }

  return (
    <LeftSideMenuLayout>
      {renderPlaylists()}
    </LeftSideMenuLayout>
  )
}

export default Dashboard
