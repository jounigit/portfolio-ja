import React, { FC } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/theme'
import { NavbarLink } from './Admin.styles'

const Container = styled.div`   
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgb(30, 100, 97);
    width: 100vh;
    width: 100%;
    height: 4rem;
    padding: 1rem;

    .name {
    float: right;
    color: ${colors.grey3};
    font-size: 1.2rem;
    font-weight: 500;
  }
`

const NavbarAdmin: FC = () => (
  <Container>
    <NavbarLink to="/">
      Etusivu
    </NavbarLink>
    <div className="name">
      HALLINTASIVU
    </div>
  </Container>
)

export default NavbarAdmin
