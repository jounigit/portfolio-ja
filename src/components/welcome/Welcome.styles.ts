import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { TABLET } from '../../styles/theme/breakpoints'

export const StyledWelcome = styled(BaseContainer)`
    /* flex-direction: column; */
    margin: auto;
    margin-top: 120px;
    padding: 1em;

  @media ${TABLET} {
    /* flex-direction: row; */
    max-width: 70%;
    margin-bottom: 1em;
  }
`
export const ItemAll = styled.div`
  flex-basis: 100%;
  margin: 1em;
  text-align: center;
`

export const Item = styled.div`
  flex-basis: 50%;
  margin: 1em;

  @media ${TABLET} {
    flex-basis: 100%;
  }
`
