import React from 'react'
import PropTypes from 'prop-types'
import withTimer from './withTimer'
// import Posed from './posed'
import styled, { css } from 'react-emotion'

const cardStateStyles = props =>
    css`
        box-shadow: ${
    props.active
        ? '0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.25)'
        : '0 0.6rem 1.6rem 0 rgba(0, 0, 0, 0.25)'
};
        border ${
    props.active
        ? '1px rgba(60,60,60,1) solid'
        : '1px rgba(0,0,0,0) solid'
};
        opacity: ${props.active ? '0.2' : '1'};
        border-radius: 1.2rem;
        overflow: hidden;
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.83, 0.17, 0.27, 0.67);
    `

const Card = styled('div')`
    ${cardStateStyles};
`

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    active: PropTypes.bool
}

export default Card
export { withTimer }
