import { css } from 'react-emotion'
import { Layout, Typography, Colors } from 'Styles'

export default {
    root: css`
        padding-top: ${Layout.calcSpace(20)};
        padding-bottom: ${Layout.calcSpace(10)};
        background: ${Colors.grey.light};
        background: linear-gradient(
            0,
            ${Colors.grey.light} 20%,
            ${Colors.grey.white} 100%
        );
        h3 {
            margin-top: ${Layout.calcSpace(6)};
            margin-bottom: ${Layout.calcSpace(3)};
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            color: ${Colors.grey.calc(80)};
        }
        li {
            font-size: ${Layout.calcSpace(3)};
            color: ${Colors.grey.calc(60)};
            margin-top: ${Layout.calcSpace(0)};
            margin-bottom: ${Layout.calcSpace(1.5)};
        }
        ul {
            list-style: square;
        }
    `,
    title: css`
        ${Typography.title};
        color: ${Colors.theme.secondary};
    `
}
