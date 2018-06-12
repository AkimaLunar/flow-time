import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Corner from '../Corner'
import Circle from '../Circle'

const Header = ({ home }) => (
    <header className={styles.root}>
        <aside className={styles.left}>
            <Circle className={styles.circle} filled />
            <Circle className={styles.circleLast} outlined />
        </aside>
        <section className={styles.center}>
            <h1 className={styles.title}>{home.heading}</h1>
            <p className={styles.description}>{home.subheading}</p>
            <Corner className={styles.corner} />
        </section>
        <aside className={styles.right} />
    </header>
)

Header.propTypes = {
    home: PropTypes.shape({
        heading: PropTypes.title,
        subheading: PropTypes.description
    })
}

export default Header
