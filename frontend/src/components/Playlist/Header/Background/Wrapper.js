import styled from 'styled-components'

const Wrapper = styled.div`
  background-size: 80%;
  background-position: right;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  ${({ image }) => {
    if (image) {
      return `background-image: url("${image}")`
    }
  }}
`
export default Wrapper
