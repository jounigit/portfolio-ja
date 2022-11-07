/* eslint-disable arrow-body-style */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import {
//   Route,
//   Switch,
// } from 'react-router-dom'
import styled from 'styled-components'
import { AlbumListAdmin } from './album/AlbumListAdmin'
import { CreateAlbum } from './album/CreateAlbum'
import NavbarAdmin from './NavbarAdmin'
import Sidebar from './Sidebar'
// import { CreateAlbum } from './album/CreateAlbum'

const Container = styled.div`
    display: flex;
    height: 100vh;
    /* color: white; */
    background-color: #9eb1c2;
`
const Content = styled.div`
  padding: 2rem;
`

const AdminPage: React.FC = () => {
  return (
    <>
      <NavbarAdmin />
      <Container>
        <Sidebar />
        <Switch>
          <Content>
            <Route
              path="/admin/album/album-list-admin"
              component={AlbumListAdmin}
            />
          </Content>
          <Route path="/admin/album/create-album" component={CreateAlbum} />
        </Switch>
      </Container>
    </>
  )
}

export default AdminPage
