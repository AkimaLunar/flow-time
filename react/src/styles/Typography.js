import { css } from 'emotion'
import Layout from './Layout'

export const font = {
    base: '"Lato", sans-serif',
    title: '"Bitter", serif'
}

export const fontWeight = {
    regular: 300,
    bold: 700
}

export default {
    font,
    fontWeight,
    title: css`
        font-family: ${font.title};
        font-size: ${Layout.calcSpace(12)}};
        margin: 0 0 ${Layout.calcSpace(4)} 0;
    `,
    subheading: css`
        font-family: ${font.base};
        font-size: ${Layout.calcSpace(3)}};
        font-weight: ${fontWeight.bold};
        margin: 0 0 ${Layout.calcSpace(2)} 0;
    `,
    paragraph: css`
        font-size: ${Layout.calcSpace(3)}};
        font-weight: ${fontWeight.regular};
        margin: 0 0 ${Layout.calcSpace(2)} 0;
    `,
    h3: css`
        font-size: ${Layout.calcSpace(2)};
        text-transform: uppercase;
        letter-spacing: 2px;
    `
}
