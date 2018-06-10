import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Card = ({ children }) => <div className={styles.root}>{children}</div>

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Card
export { default as withTimer } from './withTimer'
