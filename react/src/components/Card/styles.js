import styled, { css } from 'react-emotion'
import { Layout } from 'Styles'
import { Colors, Typography } from 'Styles'

export default {
    line: css`
        color: rgba(255, 255, 255, 0.4);
        align-self: flex-end;
        width: 90%;
        margin: ${Layout.calcSpace(2)} 0 0 0;
    `,
    lineDark: css`
        color: ${Colors.grey.calc(80)};
        align-self: flex-end;
        width: 90%;
        margin: ${Layout.calcSpace(2)} 0 0 0;
    `,
    portal: css`
        background-color: ${Colors.theme.secondary};
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        padding: ${Layout.calcSpace(2)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            color: rgba(255, 255, 255, 1);
            text-align: center;
            font-size: ${Layout.calcSpace(16)};
            align-self: center;
        }
        h3 {
            ${Typography.h3};
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
        }
        button {
            color: rgba(255, 255, 255, 0.8);
        }
        button:focus {
            outline: none;
        }
    `,
    toggleButton: css`
        display: block;
        margin: 0 auto;
        svg {
            text-align: center;
            font-size: ${Layout.calcSpace(7)};
        }
    `,
    closeButton: css`
        width: 35%;
        text-align: right;
        align-self: flex-end;

        svg {
            vertical-align: -36% !important;
            font-size: ${Layout.calcSpace(5)};
        }
    `,
    buttonGroup: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${Layout.calcSpace(6)};
    `,
    addText: css`
        padding: 0 ${Layout.calcSpace(4)};
        color: ${Colors.theme.primary};
        font-size: ${Layout.calcSpace(4)};
        font-family: ${Typography.font.title};
        cursor: poiter;
    `
}

const timerStateStyles = props =>
    css`
        filter: ${props.active ? 'grayscale(1)' : 'grayscale(0)'};
        cursor: ${props.active ? 'default' : 'pointer'};
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.83, 0.17, 0.27, 0.67);
    `

export const DynamicTimer = styled('div')`
    ${timerStateStyles};
`
