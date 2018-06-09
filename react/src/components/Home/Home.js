import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Timers from '../Timers'
import { withApp } from '../Shell/context'

const Home = ({ timers, home }) => (
    <React.Fragment>
        <Header home={home} />
        <Timers timers={timers} />
    </React.Fragment>
)

Home.propTypes = {
    site: PropTypes.shape({
        title: PropTypes.title,
        description: PropTypes.description
    }),
    home: PropTypes.shape({
        heading: PropTypes.title,
        subheading: PropTypes.description
    }),
    timers: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            background: PropTypes.object,
            duration: PropTypes.number,
            imageCreditName: PropTypes.string,
            imageCreditUrl: PropTypes.string,
            name: PropTypes.string
        })
    )
}

export default withApp(Home)
