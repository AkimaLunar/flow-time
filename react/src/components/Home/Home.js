import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import { withApp } from '../Shell/context'
import { paragraphCss, gridCss } from './styled'

const Home = ({ className, timers, site }) => (
    <section className={className}>
        <h1>{site.title}</h1>
        <p className={paragraphCss}>{site.description}</p>
        <ul className={gridCss}>
            {timers.map(timer => (
                <Card
                    key={timer._id}
                    duration={timer.duration}
                    name={timer.name}
                />
            ))}
        </ul>
    </section>
)

Home.propTypes = {
    className: PropTypes.string,
    site: PropTypes.shape({
        title: PropTypes.title,
        description: PropTypes.description
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
