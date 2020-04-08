import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const InvisibleButton = styled(Button)`
    background-color: transparent;
    border: none;
    color: #c5c6c7;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0;
`

export default InvisibleButton;