import styled from 'styled-components'
import { SiteContent } from '../../../styles/styles'
import { TABLET } from '../../../styles/theme/breakpoints'

export const AlbumListContainer = styled(SiteContent)`
  display: grid;
  grid-template-rows: 1fr;
  gap: 0.6em;
  margin: auto;
  padding: 1em;

  @media ${TABLET} {
    max-width: 70%;
  }
`
