import React from 'react'
import {
  Route,
  Switch,
  useLocation,
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
import { Login } from './components/login/login'
import AdminPage from './components/admin/AdminPage'
import { CreateUser } from './components/user/CreateUser'

const App: React.FC = () => {
  const location = useLocation()

  const isHomePage = (location.pathname === '/')
  const isAdminPage = location.pathname.includes('admin')

  // if (location.pathname === '/admin' || location.pathname === '/admin/*') {
  //   console.log('- Adminsivut ')
  // }

  // const navbar = !location.pathname.includes('admin') && <Navbar />
  // const globalcss = !location.pathname.includes('admin') && <GlobalStyles />

  return (
    <>
      <GlobalStyles homePage={isHomePage} adminPage={isAdminPage} />
      { isHomePage && <Navbar /> }
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <SiteContent>

          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={CvPage} />
          <Route path="/articles" component={ArticlesPage} />
          <Route exact path="/galleria" component={GalleriaPage} />
          <Route exact path="/exhibitions" component={ExhibitionPage} />
          <Route exact path="/galleria/:slug" component={Album} />
          <Route path="/category/:id" component={CategoryDetails} />
          <Route path="/login" component={Login} />
          <Route path="/create-user" component={CreateUser} />

        </SiteContent>
      </Switch>
    </>
  )
}

export default App
