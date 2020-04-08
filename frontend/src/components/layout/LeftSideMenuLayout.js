import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CurrentTrackPreview from 'components/CurrentTrackPreview'

function LeftSideMenuLayout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Row>
            <CurrentTrackPreview />
          </Row>
        </Col>
        <Col xs={10}>{children}</Col>
      </Row>
    </Container>
  )
}

export default LeftSideMenuLayout
