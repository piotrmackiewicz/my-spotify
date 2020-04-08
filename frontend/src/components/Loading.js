import React from 'react'
import CenteredContent from 'components/shared/CenteredContent'
import { Spinner } from 'react-bootstrap'

function Loading({ fullscreen }) {
  return (
    <CenteredContent fullscreen={fullscreen === undefined ? true : fullscreen}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </CenteredContent>
  )
}

export default Loading
