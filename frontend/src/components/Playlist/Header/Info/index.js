import React from 'react'
import Button from 'components/shared/Button'
import { Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'
import Loading from 'components/Loading'
import Wrapper from './Wrapper'
import Image from './Image/index'
import DetailsWrapper from './DetailsWrapper'

function Info({
  image,
  name,
  description,
  onPlayClick,
  loadingPlaylistPlayback,
}) {
  const renderButtons = () => (
    <div>
      <Button primary onClick={onPlayClick} style={{ minWidth: '76px' }}>
        {(() => {
          if (loadingPlaylistPlayback) {
            return (
              <Spinner animation="border" role="status" size="sm">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )
          }
          return (
            <div>
              <FontAwesomeIcon icon={faPlayCircle} /> Play
            </div>
          )
        })()}
      </Button>
    </div>
  )
  return (
    <Row>
      <Col>
        <Wrapper>
          <Image url={image} />
          <DetailsWrapper>
            <h1>{name}</h1>
            <p>{description}</p>
            {renderButtons()}
          </DetailsWrapper>
        </Wrapper>
      </Col>
    </Row>
  )
}

export default Info
