import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { Album } from './components/album/Album'
import { CategoryDetails } from './components/category/CategoryDetails'
import Navbar from './components/nav/Navbar'
import ArticlesPage from './pages/ArticlesPage'
import AlbumsCategoryPage from './pages/AlbumsCategoryPage'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import { SiteContent } from './styles/styles'
import CvPage from './pages/CvPage'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Navbar />
    <SiteContent>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cv" component={CvPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route exact path="/:categorySlug" component={AlbumsCategoryPage} />
        <Route exact path="/galleria/:slug" component={Album} />
        <Route path="/category/:id" component={CategoryDetails} />
      </Switch>
    </SiteContent>
  </>
)

export default App
