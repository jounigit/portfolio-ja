import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { DESKTOP, LAPTOP, TABLET } from '../../styles/theme/breakpoints'

export const CvContainer = styled(BaseContainer)`
    flex-wrap: wrap;
    padding: 1em;
    margin: auto;
    margin-top: 150px;

    @media ${TABLET} {
        max-width: 70%;
        padding: 1em;
    } 

    @media ${LAPTOP} {
        max-width: 70%;
        padding: 2em;
    }

    @media ${DESKTOP} {
        max-width: 70%;
        padding: 5em;
    }
`
export const Title = styled.div`
    flex: 1 100%;
`
export const Text = styled.div`
    flex: 1;
`
