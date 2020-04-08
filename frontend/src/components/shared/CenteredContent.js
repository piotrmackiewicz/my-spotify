import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const CenteredContent = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${props => {
    const { fullscreen } = props;
    if (fullscreen) {
      return 'min-height: 100vh;'
    }
  }}
`

export default CenteredContent
