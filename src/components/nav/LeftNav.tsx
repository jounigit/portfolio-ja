import React, {
  FC,
  // MouseEventHandler,
} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/theme/colors'

interface INav {
  open: boolean;
  href?: string;
}

const Ul = styled.ul<INav>`
display: flex;
flex-grow: 1;
flex-flow: row nowrap;
  list-style: none;
  min-width: 200px;
  max-width: 400px;
  /*flex-basis: auto;  default value */
  align-items: center;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    top: 0;
    left: 0;
    height: 100vh;
    width: 50vW;
    padding-top: 3.5rem;
    z-index: 10;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`
const linkStyle = {
  margin: '1rem',
  textDecoration: 'none',
  color: colors.orange,
  fontSize: '1.75rem',
}

const LinkText = styled.h2`
   font-size: 1.75rem;
   color: ${colors.orange};
`

type Props = {
  open: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
  // toggleOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LeftNav: FC<Props> = ({ open, toggleOpen }) => (
  <Ul open={open}>
    <li>
      <LinkText>
        <NavLink
          exact
          style={linkStyle}
          to="/"
          onClick={() => toggleOpen(!open)}
          activeStyle={{
            color: colors.grey3,
          }}
        >
          Home
        </NavLink>
      </LinkText>
    </li>
    <li>
      <LinkText>
        <NavLink
          style={linkStyle}
          to="/about"
          onClick={() => toggleOpen(!open)}
          activeStyle={{
            fontWeight: 'bold',
            color: colors.grey3,
          }}
        >
          About
        </NavLink>
      </LinkText>
    </li>

    <li>
      <LinkText>
        <NavLink
          style={linkStyle}
          to="/more"
          onClick={() => toggleOpen(!open)}
          activeStyle={{
            color: colors.grey3,
          }}
        >
          Work
        </NavLink>
      </LinkText>
    </li>
  </Ul>
)

export default LeftNav
