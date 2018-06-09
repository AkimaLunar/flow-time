import { css } from 'react-emotion'
import { Colors, Layout, Typography } from 'Styles'

const bgColor = Colors.grey.calc(94)
export default {
    root: css`
        display: flex;
        flex-direction: row;
        background-color: ${Colors.grey.white};
    `,
    left: css`
        flex-grow: 1;
    `,
    center: css`
        padding-right: ${Layout.calcSpace(4)};
        padding-top: ${Layout.calcSpace(16)};
        padding-bottom: ${Layout.calcSpace(16)};
        width: ${Layout.maxWidth};
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: ${Layout.calcSpace(4)};
        align-items: end;
    `,
    right: css`
        flex-grow: 1;
        background: ${bgColor};
        background: linear-gradient(
            0,
            ${bgColor} 20%,
            ${Colors.grey.calc(100)} 100%
        );
    `,
    title: css`
        ${Typography.title};
        color: ${Colors.theme.secondary};
    `,
    description: css`
        ${Typography.subheading};
        color: ${Colors.grey.calc(72)};
    `,
    corner: css`
        position: absolute;
        right: 0;
        bottom: 0;
        height: ${Layout.calcSpace(12)};
        width: ${Layout.calcSpace(12)};
        color: ${bgColor};
    `
}