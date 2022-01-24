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
import { Cv } from './components/cv/Cv'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Navbar />
    <SiteContent>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cv" component={Cv} />
        <Route exact path="/album/:slug" component={Album} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/:categorySlug" component={AlbumsCategoryPage} />
        <Route path="/category/:id" component={CategoryDetails} />
      </Switch>
    </SiteContent>
  </>
)

export default App
