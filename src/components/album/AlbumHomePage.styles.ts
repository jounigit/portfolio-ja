import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { DESKTOP, TABLET } from '../../styles/theme/breakpoints'

interface Props {
    columns: number;
}

// 1# for separated items - set: styled.div
export const AlbumHomePageContainer = styled(BaseContainer)<Props>`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

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
        grid-gap: 0em;
        width: 80%;
    }
`

// 1# for separated items - set: styled(BaseContainer)
export const AlbumListHomeItemContainer = styled.div`
    padding: 1.2rem;

    @media ${TABLET} {
        padding: 1rem;
    }
`

export const BackgroundImage = styled.div<{image: string;}>`
    width: 100%;
    height: 20em;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ image }) => image});
    background-size: cover;
`

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
