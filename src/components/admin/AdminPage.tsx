/* eslint-disable arrow-body-style */
import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components'
import * as routes from '../../shared/constants/routes'
import { Col, Grid, Row } from './Admin.styles'
import { AlbumAdmin } from './album/AlbumAdmin'
import { AlbumListAdmin } from './album/AlbumListAdmin'
import { CreateAlbum } from './album/CreateAlbum'
import { SelectAlbumCategory } from './album/SelectAlbumCategory'
import { UpdateAlbum } from './album/UpdateAlbum'
import NavbarAdmin from './NavbarAdmin'
import Sidebar from './Sidebar'
// import { CreateAlbum } from './album/CreateAlbum'

// const Container = styled.div`
//     display: grid;
//     height: 100vh;
//     /* color: white; */
//     background-color: #9eb1c2;
// `
const Content = styled.div`
  padding: 2rem;
`

const AdminPage: React.FC = () => {
  return (
    <Grid size={0}>
      <Row>
        <Col size={1}>
          <NavbarAdmin />
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <Sidebar />
        </Col>
        <Col size={3}>
          <Switch>
            <Content>
              <Route path={routes.ADMINALBUMS} component={AlbumListAdmin} />
              <Route path="/admin/album/create-album" component={CreateAlbum} />
              <Route path={routes.ADMINALBUM} component={AlbumAdmin} />
              <Route path={routes.ALBUMUPDATE} component={UpdateAlbum} />
              <Route
                path={routes.SELECTALBUMCATEGORY}
                component={SelectAlbumCategory}
              />
            </Content>
          </Switch>
        </Col>
      </Row>

    </Grid>
  )
}

export default AdminPage
