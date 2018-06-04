import { injectGlobal } from 'emotion'
import Colors from './Colors'
import Typography from './Typography'

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: ${Typography.font.base};
    color: ${Colors.grey.dark};
    background-color: ${Colors.grey.light};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Typography.font.title};
    font-weight: ${Typography.fontWeight.regular};
  }
`
