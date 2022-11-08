import styled from 'styled-components'

interface Props {
    size: number;
}

export const Grid = styled.div<Props>`
    margin-bottom: ${(props) => props.size}px;
`

export const Row = styled.div`
    display: flex;
    /* border: 1px solid blue; */
    border: 1px solid grey;
`
export const Col = styled.div<Props>`
    flex: ${(props) => props.size};
    /* border: 1px solid red; */
`
export const Image = styled.img`
    max-height: 8rem;
    float: left;
`
