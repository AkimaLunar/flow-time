import React from 'react'
import ReactDOM from 'react-dom'
import copyStyles from './copyStyles'

class Portal extends React.PureComponent {
  portalEl = document.createElement('div')
  externalWindow = null

  componentDidMount() {
    this.portalEl.style.height = '100%'
    this.externalWindow = window.open(
      '', // url
      'Timer', // window.name
      'width=400,height=600,menubar=no,location=no,toolbar=0' // params
    )

    this.externalWindow.document.title = 'Timer'
    this.externalWindow.document.body.appendChild(this.portalEl)
    copyStyles(document, this.externalWindow.document)
  }

  componentWillUnmount() {
    this.externalWindow.close()
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.portalEl
    )
  }
}

export default Portal
