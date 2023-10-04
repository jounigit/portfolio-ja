import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components'
import * as routes from '../../shared/constants/routes'
import {
  AsideDb, GridDb, HeaderDb, MainDb,
} from './Admin.styles'
import { AlbumAdmin } from './album/AlbumAdmin'
import { AlbumListAdmin } from './album/AlbumListAdmin'
import { CreateAlbum } from './album/CreateAlbum'
// import { SelectAlbumCategory } from './album/SelectAlbumCategory'
import { UpdateAlbum } from './album/UpdateAlbum'
import NavbarAdmin from './NavbarAdmin'
import Sidebar from './Sidebar'
import { PictureListAdmin } from './picture/PictureListAdmin'
import { PictureUpdate } from './picture/PictureUpdate'

const Content = styled.div`
  padding: 2rem;
`

const AdminPage: React.FC = () => (
  <GridDb>
    <HeaderDb>
      <NavbarAdmin />
    </HeaderDb>
    <AsideDb>
      <Sidebar />
    </AsideDb>
    <MainDb>
      <Switch>
        <Content>
          <Route path={routes.ADMINALBUMS} component={AlbumListAdmin} />
          <Route path="/admin/album/create-album" component={CreateAlbum} />
          <Route path={routes.ADMINALBUM} component={AlbumAdmin} />
          <Route path={routes.ALBUMUPDATE} component={UpdateAlbum} />
          {/* <Route
            path={routes.SELECTALBUMCATEGORY}
            component={SelectAlbumCategory}
          /> */}
          <Route path={routes.ADMINPICTURES} component={PictureListAdmin} />
          <Route path={routes.PICTUREUPDATE} component={PictureUpdate} />
        </Content>
      </Switch>
    </MainDb>

  </GridDb>
)

export default AdminPage
