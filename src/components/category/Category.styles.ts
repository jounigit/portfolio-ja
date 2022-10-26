import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { TABLET } from '../../styles/theme/breakpoints'
import colors from '../../styles/theme/colors'

export const CategoryContainer = styled(BaseContainer)`
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
export const TitleListItem = styled.div`
    flex: 1 100%;
`

export const LinkText = styled.h2`
     font-size: 0.75rem;
     color: ${colors.orange};
  `
