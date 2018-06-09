import React from 'react'
import PropTypes from 'prop-types'

const Corner = ({ className }) => (
    <svg
        className={className}
        height="245"
        viewBox="0 0 244 245"
        width="244"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="Corner" fill="none" fillRule="evenodd">
            <path
                d="M280,280 L0,280 C163.835298,280 280,150.789169 280,0 L280,280 Z"
                transform="translate(-34 -33)"
                id="Corner"
                fill="currentColor"
            />
        </g>
    </svg>
)
Corner.propTypes = {
    className: PropTypes.string
}
export default Corner
