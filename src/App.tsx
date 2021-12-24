import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
// import { Category } from './components/category/Category'
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
        {/* <Route
          path="/category/:id"
          render={(props) => <CategoryDetails id={props.match.params.id} />
        }
        /> */}
        <Route path="/category/:id" component={CategoryDetails} />
      </Switch>
    </SiteContent>
  </>
)

export default App
