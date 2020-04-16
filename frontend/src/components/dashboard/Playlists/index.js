import React, { useState } from 'react'
import InvisibleButton from 'components/shared/InvisibleButton'
import Loading from 'components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons'
import { Button, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Playlists({ playlists }) {
  const [collapsed, setCollapsed] = useState(false)

  const renderPlaylists = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {playlists.map((playlist) => (
        <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
          <InvisibleButton>
            <div
              style={{
                width: '200px',
                padding: '10px',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={playlist.images[0].url}
                style={{ width: '100%', height: '200px' }}
                alt={`Playlist ${playlist.name}`}
              />
              <p style={{ textAlign: 'center', margin: '5px 0' }}>
                {playlist.name}
              </p>
            </div>
          </InvisibleButton>
        </Link>
      ))}
    </div>
  )

  const renderContent = () => {
    if (!playlists) {
      return <Loading fullscreen={false} />
    }

    if (playlists.length < 1) {
      return <p>You don't have any playlist...</p>
    }

    return renderPlaylists()
  }

  const renderCollapseButton = () => {
    if (collapsed) {
      return (
        <Button
          variant="outline-primary"
          style={{ fontSize: '1.5rem', padding: '0 10px' }}
          onClick={() => setCollapsed(false)}
          aria-controls="playlists"
          // aria-expanded={!collapsed}
        >
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </Button>
      )
    } else {
      return (
        <Button
          variant="outline-primary"
          style={{ fontSize: '1.5rem', padding: '0 10px' }}
          onClick={() => setCollapsed(true)}
          aria-controls="playlists"
          // aria-expanded={collapsed}
        >
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </Button>
      )
    }
  }

  return (
    <div style={{ margin: '15px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ paddingLeft: '10px' }}>My Playlists</h2>
        {renderCollapseButton()}
      </div>
      <Collapse in={!collapsed}>
        <div id="playlists">{renderContent()}</div>
      </Collapse>
    </div>
  )
}

export default Playlists
