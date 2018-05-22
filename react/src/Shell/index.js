import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';

import Loading from '../Loading';
import Footer from '../Footer';

const Home = Loadable({
    loader: () =>
        import(/* webpackChunkName:'Home', webpackPrefetch: true */ '../Home'),
    loading: Loading
});

const About = Loadable({
    loader: () =>
        import(/* webpackChunkName:'About', webpackPrefetch: true */ '../About'),
    loading: Loading
});

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
);

export default hot(module)(Shell);
