import { css } from 'react-emotion'
import { Layout, Typography, Colors } from 'Styles'

export default {
    root: css`
        background-color: ${Colors.grey.calc(94)};
        padding: ${Layout.calcSpace(10)} 0;
    `,
    grid: Layout.grid,
    timer: css`
        background-color: ${Colors.theme.secondary};
        display: flex;
        flex-direction: column;
        height: ${Layout.calcSpace(40)};
        justify-content: space-between;
        background-size: cover;
        background-position: 0;

        p {
            text-align: center;
            font-size: ${Layout.calcSpace(8)};
            align-self: center;
            color: rgba(255, 255, 255, 0.8);
        }

        h3 {
            ${Typography.h3};
            color: rgba(255, 255, 255, 0.4);
            text-align: center;
        }
    `
}
