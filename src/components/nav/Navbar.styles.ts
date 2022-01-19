import styled from 'styled-components'
import { colors } from '../../styles/theme'
import { TABLET } from '../../styles/theme/breakpoints'

interface IProps {
  scrollPos: number
}

export const NavbarContainer = styled.nav<IProps>`
    background: none;
    box-shadow: none;
    /* margin-bottom: 30px; */
  
  .logo {
    /* padding: 15px 0; */
    align-content: center;
    border: 3px solid green;
  }

  .name {
    padding-top: 0.5em;
    color: ${colors.grey3};
    font-size: 1.2rem;
  }

  @media ${TABLET} {
    display: flex;
    justify-content: space-between;
    height: 55px;
    width: 100%;
    float: left;
    margin-bottom: 50px;
    padding: 0 20px;
    background: rgba(203,198,198,${(p) => (p.scrollPos === 0 ? 0.5 : 1)});
    box-shadow: var(--shadow-primary);
    position: fixed;
    top: 0;
    z-index: 10;
    /* transition-timing-function: ease-in;
    transition: .5s; */
  }
`
