import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.nav`
    z-index: 1;
    width: 20%;
    height: 100vh;
    background-color: rgb(30, 100, 97);
    padding-left: 2rem;
`
const LinkText = styled.h2`
   font-size: 1.75rem;
`

const Sidebar: FC = () => (
  <Container>
    <LinkText>
      <Link to="/admin/album/album-list-admin">
        Albumit
      </Link>
    </LinkText>
    <LinkText>
      <Link to="/admin/album/create-album">
        Uusi albumi
      </Link>
    </LinkText>
    <LinkText>
      <Link to="/album/create-album">
        Uusi categoria
      </Link>
    </LinkText>
    <LinkText>
      <Link to="/album/create-album">
        Uusi kuva
      </Link>
    </LinkText>
  </Container>
)

export default Sidebar
