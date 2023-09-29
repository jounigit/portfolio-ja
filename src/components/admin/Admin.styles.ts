import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { TABLET } from '../../styles/theme/breakpoints'

interface Props {
    size?: number;
    bgColor?: string;
}

export const GridDb = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "header header"
    "sidebar main"
    ;
`

export const HeaderDb = styled.div`
    grid-area: header; 
    height: 4rem;
    width: 100vh;
`

export const AsideDb = styled.div`
    grid-area: sidebar;
    position: fixed;
    left: 0;
    top: 4rem;
    background-color: rgb(30, 100, 97);
    height: 100vh;
    width: 14rem;
`

export const MainDb = styled.div`
    grid-area: main;
    margin-top: 2rem;
    width: 90%;
`

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
export const MainContainer = styled.div`
    margin: 0 auto 2rem;

    @media ${TABLET} {
        max-width: 90%;
  }
`

export const Image = styled.img`
    max-height: 8rem;
    float: left;
`
export const NavbarLink = styled(NavLink)`
    color:white;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0.8em 0.5em 0px;
    margin: 10px;
    &:hover,
    &:focus{
    color: blue;
    };
    &:active{
    color: red;
    };
    @media(max-width: 700px) {
        display: none;
    }
`
