import { css } from 'react-emotion'
import { Layout } from 'Styles'
import { Colors, Typography } from 'Styles'

export default {
    root: css`
        border-radius: 1.2rem;
        box-shadow: 0 0.6rem 1.6rem 0 rgba(0, 0, 0, 0.35);
        overflow: hidden;
    `,
    line: css`
        color: rgba(255, 255, 255, 0.6);
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
            ${Typography.h3} text-align: center;
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
    `
}
