import { css } from 'emotion'
import Layout from './Layout'

export const font = {
    base: '"Lato", sans-serif',
    title: '"Bitter", serif'
}

export const fontWeight = {
    regular: 400,
    bold: 900
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
        margin: 0 0 ${Layout.calcSpace(2)} 0;
    `
}
