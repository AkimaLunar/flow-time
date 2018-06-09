import styled from 'react-emotion'
import { Layout } from 'Styles'

const Main = styled('main')`
    background-color: ${props => (props.color ? props.color : 'transparent')};
    ${Layout.container};
`

export default Main
