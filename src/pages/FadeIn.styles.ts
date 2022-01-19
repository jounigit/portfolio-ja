import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`
interface Props {
    timein: string;
  }

export const FadeDiv = styled.div<Props>`
animation: ${fadeIn} ${(p) => p.timein};
opacity: 1;
`
