import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { Album } from './components/album/Album'
import Navbar from './components/nav/Navbar'
import ArticlesPage from './pages/ArticlesPage'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import { SiteContent } from './styles/styles'
import CvPage from './pages/CvPage'
import GalleriaPage from './pages/GalleriaPage'
import ExhibitionPage from './pages/ExhibitionPage'
import { CategoryDetails } from './components/category/CategoryDetails'
import { CreateAlbum } from './components/album/CreateAlbum'
import { Login } from './components/login/login'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Navbar />
    <SiteContent>
      <Switch>
        {/* <Route path="/admin" component={} */}
        <Route exact path="/" component={Home} />
        <Route exact path="/cv" component={CvPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route exact path="/galleria" component={GalleriaPage} />
        <Route exact path="/exhibitions" component={ExhibitionPage} />
        <Route exact path="/galleria/:slug" component={Album} />
        <Route path="/category/:id" component={CategoryDetails} />
        <Route path="/album/create-album" component={CreateAlbum} />
        <Route path="/login" component={Login} />
      </Switch>
    </SiteContent>
  </>
)

export default App
