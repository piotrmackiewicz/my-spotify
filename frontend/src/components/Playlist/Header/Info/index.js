import React from 'react'
import Button from 'components/shared/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'
import Wrapper from './Wrapper'
import Image from './Image/index'
import DetailsWrapper from './DetailsWrapper'

function Info({ image, name, description }) {
  const renderButtons = () => (
    <div>
      <Button primary>
        <FontAwesomeIcon icon={faPlayCircle} /> Play
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
