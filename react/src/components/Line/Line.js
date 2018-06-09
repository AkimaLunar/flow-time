import React from 'react'
import PropTypes from 'prop-types'

const Line = ({ className }) => (
    <svg
        className={className}
        width="364"
        height="26"
        viewBox="0 0 364 26"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="Line" transform="translate(-971 -565)" stroke="currentColor">
            <g transform="translate(950 546)">
                <g transform="translate(22 20)">
                    <circle
                        id="Line.Circle"
                        cx="12"
                        cy="12"
                        r="12"
                        fill="none"
                    />
                    <path d="M362.5,12.5 L24.5,12.5" strokeLinecap="square" />
                </g>
            </g>
        </g>
    </svg>
)
Line.propTypes = {
    className: PropTypes.string
}
export default Line
