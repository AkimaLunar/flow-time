import React from 'react'
import Section from '../Section'
import PropTypes from 'prop-types'
import List from '../List'
import Card from '../Card'
import withTimer from '../Card/withTimer'
import styles from './styles'
import styled from 'react-emotion'

const Timer = styled(withTimer(Card))`
    ${styles.timer};
    background-image: url(${props => props.background});
`

const Timers = ({ timers }) => (
    <div className={styles.root}>
        <Section>
            <List className={styles.grid}>
                {timers.map(timer => (
                    <li key={timer._id}>
                        <Timer
                            duration={timer.duration}
                            name={timer.name}
                            background={timer.backgroundUrl}
                        />
                    </li>
                ))}
            </List>
        </Section>
    </div>
)

Timers.propTypes = {
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

export default Timers
