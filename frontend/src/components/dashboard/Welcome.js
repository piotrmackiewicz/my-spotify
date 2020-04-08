import React from 'react'

function Welcome({ name }) {
  if (!name) {
    return <h2>Hello!</h2>
  }

  return <h2>Hello {name}!</h2>
}

export default Welcome
