import styled from 'react-emotion'
import { Layout } from 'Styles'

const Section = styled('section')`
    min-height: ${Layout.calcSpace(8)};
    background-color: ${props => (props.color ? props.color : 'transparent')};
    position: relative;
    ${Layout.container};
`

export default Section
