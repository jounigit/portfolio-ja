import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { colors } from '../../styles/theme'
import { TABLET } from '../../styles/theme/breakpoints'
// import { TABLET } from '../../styles/theme/breakpoints'

interface IImageGridProps {
    width: number,
    height: number,
  }

export const AlbumListItemContainer = styled(BaseContainer)`
    flex-wrap: wrap;
    padding: 1.2rem;
`
export const Title = styled.div`
    flex: 1 100%;
`
export const ImageBox = styled.div`
   flex: 1 100%;
   
   @media ${TABLET} {
    flex: 0 0 45%;
    margin-right: 1rem;
    margin-bottom: 1rem;
   }
`
export const ImageGridListItem = styled.div<IImageGridProps>`

  img {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    object-fit: cover;
    }

  @media ${TABLET} {
    display: grid;
  grid-template-columns: 1fr 1fr;
  /* padding: 15px; */
  grid-gap: .5rem;

  div {
    height: ${({ height }) => height}px;
    margin: auto;
  }

  img {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    object-fit: cover;
    }
  }
`
export default styled.div`
    /* flex: 1; */
    flex: 0 0 45%;
    margin: 0 0 0.5em;
    color: ${colors.grey3};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }

    h3 {
      margin-bottom: 0.5rem;
    }
`
export const InfoText = styled.a`
    margin-top: 1.2rem;
    margin-bottom: 1rem;
    font-size: 0.9em;
    color: black;
    text-decoration: none;
`
