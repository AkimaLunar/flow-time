/* global module */

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'
import { getAppData, parseAppData } from '../../clients/sanity'
import { Provider } from './context'
import '../../styles/Base'

import Loading from '../Loading'
import Footer from '../Footer'

// TODO: Prefetch is NOT working.
// Try https://github.com/GoogleChromeLabs/preload-webpack-plugin
const Home = Loadable({
    loader: () =>
        import(/* webpackChunkName:'Home', webpackPrefetch: true */ '../Home'),
    loading: Loading
})

const About = Loadable({
    loader: () =>
        import(/* webpackChunkName:'About', webpackPrefetch: true */ '../About'),
    loading: Loading
})

About.preload()

class Shell extends React.PureComponent {
    state = { site: {}, timers: [] }
    componentDidMount() {
        getAppData()
            .then(appData => {
                const { site, timers } = parseAppData(appData)
                this.setState({ site, timers })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Provider value={this.state}>
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
            </Provider>
        )
    }
}

export default hot(module)(Shell)
