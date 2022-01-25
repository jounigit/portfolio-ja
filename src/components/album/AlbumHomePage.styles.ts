/* eslint-disable max-len */
import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { DESKTOP, LAPTOP, TABLET } from '../../styles/theme/breakpoints'
// import { AlbumListItemContainer } from './AlbumListItem.styles'
// import { SiteContent } from '../../styles/styles'

interface Props {
    columns: number;
}

export const AlbumHomePageContainer = styled.div<Props>`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    /* width: 70%;
    margin: auto; */

    @media ${TABLET} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0em;
        width: 90%;
        margin: auto;
    }

    @media ${DESKTOP} {
        display: grid;
        grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
        grid-gap: 0.1em;
        width: 80%;
    }
`

export const AlbumListHomeItemContainer = styled(BaseContainer)`
    padding: 1.2rem;

    @media ${TABLET} {
        padding: 1rem;
    }
`

export const BackgroundImage = styled.div<{image: string;}>`
    width: 100%;
    height: 20em;
    /* background-image: url(${({ image }) => image}); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ image }) => image});
    background-size: cover;
`

// url(${({ image }) => image})
export const TextWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    /* border: 1px solid red; */
    h2, h3, h4 {
        color: white;
    }
`
