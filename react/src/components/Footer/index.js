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
    width: 100%;
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : Colors.grey.calc(90)};
    height: ${Layout.calcSpace(10)};

    a {
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin-left: ${Layout.calcSpace(2)};
        color: ${Colors.grey.calc(80)};
        transition: all 0.2s ease;
    }
    a:hover {
        color: ${Colors.theme.primary};
    }

    footer {
        ${Layout.container};
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
    }
`
