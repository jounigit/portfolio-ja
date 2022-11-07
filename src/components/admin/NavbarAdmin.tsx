import React, { FC } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/theme'

const Container = styled.nav`
    z-index: 2;
    height: 4rem;
    background-color: rgb(30, 100, 97);

    .name {
    padding: 0.8em 0.5em 0;
    float: right;
    color: ${colors.grey5};
    font-size: 1.2rem;
    font-weight: 500;
  }
`

const NavbarAdmin: FC = () => (
  <Container>
    <div className="name">
      HALLINTASIVU
    </div>
  </Container>
)

export default NavbarAdmin
