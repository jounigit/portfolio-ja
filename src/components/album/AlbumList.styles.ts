import styled from 'styled-components'
import { SiteContent } from '../../styles/styles'
import { TABLET } from '../../styles/theme/breakpoints'

export const AlbumListContainer = styled(SiteContent)`
  display: grid;
  grid-template-rows: 1fr;
  gap: 0.6em;
  margin: auto;

  @media ${TABLET} {
    max-width: 70%;
    padding: 1em;
  }
`
