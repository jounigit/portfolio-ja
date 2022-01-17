import React, {
  FC,
  // MouseEventHandler,
} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import { JsxElement } from 'typescript'
import colors from '../../styles/theme/colors'
// import Dropdown from './dropdown'

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
  color: colors.white,
  fontSize: '1.4rem',
}

const LinkText = styled.h2`
   font-size: 1.75rem;
   /* color: ${colors.white}; */
`

type Props = {
  open: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
  // toggleOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface INavProps extends Props {
  link: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const navLinkTmp = ({
  open, toggleOpen, text = '', link = '/',
}: INavProps) => (
  <LinkText>
    <NavLink
      exact
      style={linkStyle}
      to={`${link}`}
      onClick={() => toggleOpen(!open)}
      activeStyle={{
        color: colors.grey3,
      }}
    >
      {text}
    </NavLink>
  </LinkText>
)

const LeftNav: FC<Props> = ({ open, toggleOpen }) => (
  <Ul open={open}>
    <li>
      {navLinkTmp({
        open, toggleOpen, text: 'Home', link: '/',
      })}
    </li>
    <li>
      {navLinkTmp({
        open, toggleOpen, text: 'Näyttelyt', link: '/nayttelyt',
      })}
    </li>
    <li>
      {navLinkTmp({
        open, toggleOpen, text: 'Teokset', link: '/galleria',
      })}
    </li>

    {/* <li>
      <LinkText>
        <Dropdown activatorText="Galleria" />
      </LinkText>
    </li> */}
  </Ul>
)

export default LeftNav
