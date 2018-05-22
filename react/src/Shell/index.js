import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import loadable from 'loadable-components'

import Loading from '../Loading'
import Footer from '../Footer'

const Home = loadable(
  () => import(/* webpackChunkName:'Home' */ '../Home'),
  {
    LoadingComponent: Loading
  }
);

const About = loadable(
  () => import(/* webpackChunkName:'About' */ '../About'),
  {
    LoadingComponent: Loading
  }
);

const Shell = () => (
  <Router>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </main>
  </Router>
)

export default hot(module)(Shell)
