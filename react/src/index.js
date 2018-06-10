import React from 'react'
import ReactDOM from 'react-dom'
import Shell from './components/Shell'

// import registerServiceWorker from './registerServiceWorker';

// Sentry reporting
Raven.config(
    'https://0a5a207525814d3a877b353060f20317@sentry.io/1222804'
).install()

ReactDOM.render(<Shell />, document.getElementById('root'))
// registerServiceWorker();
