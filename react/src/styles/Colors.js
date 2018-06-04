const modernSky = '#2CB0FC'
const ultraViolet = '#7043E0'
const ether = '#E0F5FF'
const deepOcean = '#4C2E9A'

const grey28 = '#3F3C47'
const grey52 = '#767085'
const grey84 = '#CCC9D5'
const grey96 = '#F0F2F5'

const theme = {
    primary: modernSky,
    secondary: ultraViolet,
    dark: deepOcean,
    light: ether
}

const grey = {
    xDark: grey28,
    dark: grey52,
    medium: grey84,
    light: grey96,
    white: '#ffffff'
}

export const background = grey.light
export const border = grey.medium

export default {
    theme,
    grey,
    background,
    border
}
