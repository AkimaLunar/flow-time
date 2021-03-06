import { injectGlobal } from 'emotion'
import Colors from './Colors'
import Layout from './Layout'
import Typography from './Typography'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100%;
    position: realtive;
    background-color: ${Colors.grey.light};
    margin: 0;
    padding: 0;
    color: ${Colors.grey.dark};
    font-family: ${Typography.font.base};
    font-size: ${Layout.rootFontSize};
  }

  .root {
    min-height: 100vh;
    overflow: hidden;
    display: block;
    position: relative;
    padding-bottom: ${Layout.calcSpace(10)};
  }

  h1 {
    font-family: ${Typography.font.title};
    font-weight: ${Typography.fontWeight.regular};
    margin: ${Layout.calcSpace(2)} 0;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Typography.font.base};
    font-weight: ${Typography.fontWeight.bold};
    margin: ${Layout.calcSpace(2)} 0;
  }

  ul {
    padding: 0;
    margin: ${Layout.calcSpace(2)} 0;
  }

  a {
    font-family: ${Typography.font.base};
    font-weight: ${Typography.fontWeight.bold};
    color: ${Colors.theme.primary};
    text-decoration: none;
  }

  p {
    ${Typography.paragraph}
  }

  hr {
    border-width: 0;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${Colors.grey.light};
    padding: 0;
  }

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    color: ${Colors.theme.primary};
    cursor: pointer;
    display: inline-block;
    font-size: ${Layout.calcSpace(2)};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    -webkit-font-smoothing: antialiased;
    font-weight: ${Typography.fontWeight.bold};
    line-height: 1;
    padding: ${Layout.calcSpace(2)} ${Layout.calcSpace(4)};
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  }

`
