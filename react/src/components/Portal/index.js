import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import copyStyles from './copyStyles'

class Portal extends React.PureComponent {
    portalEl = document.createElement('div')
    externalWindow = null

    onBeforeuUnload = () => {
        this.props.onClose && this.props.onClose()
    }
    componentDidMount() {
        this.portalEl.style.height = '100%'
        this.externalWindow = window.open(
            '', // url
            this.props.name || 'FlowTime', // window.name
            'width=400,height=600,menubar=no,location=no,toolbar=0' // params
        )

        this.externalWindow.document.title = this.props.name || 'FlowTime'
        this.externalWindow.document.body.appendChild(this.portalEl)
        copyStyles(document, this.externalWindow.document)
        this.externalWindow.onbeforeunload = this.onBeforeuUnload
        this.props.onOpen && this.props.onOpen()
        console.log('Opening Portal…')
    }

    componentWillUnmount() {
        this.props.onClose && this.props.onClose()
        this.externalWindow.close()
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.portalEl)
    }
}

Portal.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    name: PropTypes.string,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
}

export default Portal
