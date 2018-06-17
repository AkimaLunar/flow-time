import { css } from 'react-emotion'
import { Colors, Layout, Typography } from 'Styles'

const bgColor = Colors.grey.calc(94)
console.log(Layout.mediaqueries)
export default {
    root: css`
        display: flex;
        flex-direction: row;
        background-color: ${Colors.grey.calc(98)};
    `,
    left: css`
        flex-grow: 1;
        position: relative;
    `,
    center: css`
        padding-right: ${Layout.calcSpace(8)};
        padding-top: ${Layout.calcSpace(14)};
        padding-bottom: ${Layout.calcSpace(14)};
        width: ${Layout.maxWidth};
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: ${Layout.calcSpace(4)};
        align-items: end;
        ${Layout.padding};
        ${Layout.breakpoints({
        gridTemplateColumns: [
            `repeat(1, 1fr)`,
            `repeat(1, 1fr)`,
            `repeat(2, 1fr)`
        ]
    })};
    `,
    right: css`
        flex-grow: 1;
        background: ${bgColor};
        background: linear-gradient(
            0,
            ${bgColor} 20%,
            ${Colors.grey.calc(98)} 100%
        );
        border-top-left-radius: 10rem;
    `,
    circle: css`
        display: inline-block;
        margin: 1rem 0 0 1rem;
        position: absolute;
    `,
    circleLast: css`
        display: inline-block;
        margin: 1rem 0 0 1rem;
        position: absolute;
        left: 1.75rem;
    `,
    title: css`
        ${Typography.title};
        margin-bottom: 0;
        color: ${Colors.theme.secondary};
        text-align: left;
    `,
    description: css`
        ${Typography.paragraph};
        margin-bottom: 0;
        color: ${Colors.grey.calc(72)};
        ${Layout.breakpoints({
        paddingRight: [0, 0, Layout.calcSpace(8)]
    })};
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
