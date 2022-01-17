import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { colors } from '../../styles/theme'
import { TABLET } from '../../styles/theme/breakpoints'

interface IImageGridProps {
    width: number,
    height: number,
  }

export const AlbumListItemContainer = styled(BaseContainer)`
    flex-wrap: wrap;
    padding: 1em;
`
export const Title = styled.div`
    flex: 1 100%;
`
export const ImageBox = styled.div`
    /* flex: 1 100%; */
   flex: 0 0 45%;

   /* div {
    /* flex-basis: calc(25% - 10px); */
    /* height: auto; */
    /* width: 200px;
    height: 200px;
    border: 1px solid; */
    }

img {
    /* width: 100%;
    height: auto; */
    /* width: 200px;
    height: 200px;
    object-fit: cover; */
    } */

/* @media ${TABLET} {
    flex: 0 0 55%;
} */
`
export const ImageGridListItem = styled.div<IImageGridProps>`
/* display: flex;
flex-wrap: wrap;
width: 100%;
margin: 0 auto; */

/* div {
  flex-basis: 100%;
  height: auto;
  border: 1px solid;
} */

/* img {
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  object-fit: cover;
}  */

/* @media ${TABLET} { */
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px;
  grid-gap: .5rem;

  div {
    height: ${({ height }) => height}px;
  }
  
  img {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    object-fit: cover;
    } 

  /* img {
    height: 100%;
    } */

  /* } */
}
`
export const Info = styled.div`
    /* flex: 1; */
    flex: 0 0 45%;
    margin: 0 0 0.5em;
    color: ${colors.grey3};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
`
export const InfoText = styled.a`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.9em;
    color: black;
    text-decoration: none;
`
