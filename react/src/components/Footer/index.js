import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styled from 'react-emotion'
import { Layout, Colors } from 'Styles'

const Footer = ({ className }) => (
    <section className={className}>
        <footer>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </footer>
    </section>
)

Footer.propTypes = {
    className: PropTypes.string,
    backgroundColor: PropTypes.string
}

export default styled(Footer)`
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : Colors.grey.medium};
    footer {
        ${Layout.container};
    }
`
