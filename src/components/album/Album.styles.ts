import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { TABLET } from '../../styles/theme/breakpoints'

export const AlbumContainer = styled(BaseContainer)`
    flex-wrap: wrap;
    padding: 1em;
`
export const Title = styled.div`
    flex: 1 100%;
`
export const ImageBox = styled.div`
   flex: 1 100%;

@media ${TABLET} {
    flex: 0 0 55%;
}
`
export const Text = styled.div`
    flex: 1;
`
