import styled from 'react-emotion'
import { Colors } from 'Styles'

const Circle = styled('div')`
    margin: 0;
    height: ${props => (props.size ? props.size : '1rem')};
    width: ${props => (props.size ? props.size : '1rem')};
    background-color: ${props =>
        props.filled ? Colors.theme.secondary : 'transparent'};
    border-color: ${props =>
        props.outlined ? Colors.theme.secondary : 'transparent'};
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
`

export default Circle
