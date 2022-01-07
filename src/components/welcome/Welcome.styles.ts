import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { TABLET } from '../../styles/theme/breakpoints'

export const StyledWelcome = styled(BaseContainer)`
    flex-direction: column;
    margin-top: 130px;

  @media ${TABLET} {
    flex-direction: row;
    margin-bottom: 1em;
  }
`
export const Item = styled.div`
  flex-basis: 50%;
  margin: 1em;

  @media ${TABLET} {
    flex-basis: 100%;
  }
`
