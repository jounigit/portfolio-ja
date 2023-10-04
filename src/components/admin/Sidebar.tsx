import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/theme'

const Container = styled.div`
    padding: 2rem 0 0 2rem;
    padding-top: 2rem;
`

const SidebarLink = styled(NavLink)`
   display: block;
   padding: 0.4rem 0;
      color: ${colors.grey2};
   font-size: 1.2rem;
   font-size: x-large;
    font-weight: 600;
   &:hover,
    &:focus{
      color: ${colors.grey4};
    }
    &:active{
      color: ${colors.grey4};
    };
`

const Sidebar: FC = () => (
  <Container>
    {/* <SidebarLink to="/dashboard">
      <FaHome />
    </SidebarLink> */}
    <SidebarLink to="/admin/album/album-list-admin">
      Albumit
    </SidebarLink>
    <SidebarLink to="/admin/picture/picture-list-admin">
      Kuva-arkisto
    </SidebarLink>
    <p>.................</p>
    <SidebarLink to="/admin/album/create-album">
      Uusi albumi
    </SidebarLink>
    <SidebarLink to="/album/create-album">
      Uusi categoria
    </SidebarLink>
    <SidebarLink to="/album/create-album">
      Uusi kuva
    </SidebarLink>
  </Container>
)

export default Sidebar
