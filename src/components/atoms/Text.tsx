import styled from 'styled-components'

interface IText {
    lead?: false | true | undefined,
    muted?: false | true | undefined,
}

const Text = styled.p<IText>`
  margin: 0 0 0.5em;
  font-size: ${({ lead }) => (lead ? 1.20 : 1)}rem;
  opacity: ${({ muted }) => (muted ? 0.65 : 1)};
`

export default Text
