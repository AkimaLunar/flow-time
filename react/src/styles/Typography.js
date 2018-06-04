import { css } from 'emotion'
import Colors from './Colors'

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
        font-size: 2rem;
        color: ${Colors.theme.primary};
    `
}
