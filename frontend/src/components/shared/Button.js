import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'
import styled from 'styled-components'

const StyledButton = styled(BootstrapButton)`
  border-radius: 0;
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
            font-size: 0.6rem;
            padding: 4px 7px
        `
      case 'big':
        return `
            font-size: 1.4rem;
            padding: 8px 17px;
        `
      default:
        return ''
    }
  }}
`

function Button(props) {
  // Set color
  let variant = null
  if (props.primary) {
    variant = 'primary'
  } else if (props.secondary) {
    variant = 'secondary'
  } else {
    variant = 'primary'
  }

  // Set size
  let size = null
  if (props.small) {
    size = 'small'
  } else if (props.big) {
    size = 'big'
  } else {
    size = 'regular'
  }

  return (
    <StyledButton variant={variant} size={size}>
      {props.children}
    </StyledButton>
  )
}

export default Button
