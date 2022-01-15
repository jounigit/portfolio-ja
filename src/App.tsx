import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { Album } from './components/album/Album'
import { CategoryDetails } from './components/category/CategoryDetails'
import Navbar from './components/nav/Navbar'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import { SiteContent } from './styles/styles'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Navbar />
    <SiteContent>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/album/:slug" component={Album} />
        <Route path="/category/:id" component={CategoryDetails} />
      </Switch>
    </SiteContent>
  </>
)

export default App
