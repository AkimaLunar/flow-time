import React from 'react'
import PropTypes from 'prop-types'
import Portal from '../Portal'
import Line from '../Line'
import MdClose from 'react-icons/lib/md/close'
import MdPauseCircleFilled from 'react-icons/lib/md/pause-circle-filled'
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled'

import styles, { DynamicTimer } from './styles'

const withTimer = Component => {
    class WithTimer extends React.Component {
        cardId = null
        state = { counter: 0, showWindowPortal: false }

        componentDidMount() {
            if (this.props.hasOwnProperty('duration')) {
                this.setState({ counter: this.props.duration * 60 })
            }
        }

        tick = () => {
            let counter = this.state.counter
            if (counter <= 0) {
                this.stopTimer()
            } else {
                counter--
                this.setState({ counter })
            }
        }

        startTimer = () => {
            this.setState({ active: true, showWindowPortal: true })
            this.props.setActive && this.props.setActive(true)
            this.cardId = setInterval(() => this.tick(), 1000)
        }

        pauseTimer = () => {
            clearInterval(this.cardId)
            this.setState({ active: false })
        }

        stopTimer = () => {
            clearInterval(this.cardId)
            this.props.setActive && this.props.setActive(false)
            this.setState({
                active: false,
                counter: this.props.duration * 60,
                showWindowPortal: false
            })
        }

        toggleTimer = () => {
            if (this.props.active) {
                return
            }
            if (this.state.active) {
                this.pauseTimer()
            } else {
                this.startTimer()
            }
        }

        handleClose = () => this.stopTimer()

        render() {
            const { className, name, background } = this.props
            const minutes = Math.floor(this.state.counter / 60)
            const _s = this.state.counter - minutes * 60
            const seconds = _s < 10 ? `0${_s}` : _s
            return (
                <React.Fragment>
                    <Component {...this.props} active={this.props.active}>
                        <DynamicTimer
                            className={className}
                            active={this.props.active}
                            onClick={this.toggleTimer}
                        >
                            <Line className={styles.line} />
                            <p>
                                {minutes}:{seconds}
                            </p>
                            <h3>{name}</h3>
                        </DynamicTimer>
                    </Component>
                    {this.state.showWindowPortal && (
                        <Portal
                            onClose={this.handleClose}
                            name={`Timer: ${name}`}
                        >
                            <div
                                className={styles.portal}
                                style={{
                                    backgroundImage: `url(${background}?)`
                                }}
                            >
                                <button
                                    className={styles.closeButton}
                                    onClick={() => this.stopTimer()}
                                >
                                    Close <MdClose />
                                </button>
                                <p>
                                    {minutes}:{seconds}
                                    <button
                                        className={styles.toggleButton}
                                        onClick={() => this.toggleTimer()}
                                    >
                                        {this.state.active ? (
                                            <MdPauseCircleFilled />
                                        ) : (
                                            <MdPlayCircleFilled />
                                        )}
                                    </button>
                                </p>
                                <h3>{name}</h3>
                            </div>
                        </Portal>
                    )}
                </React.Fragment>
            )
        }
    }

    WithTimer.displayName = `withTimer(${Component.displayName ||
        Component.name})`

    WithTimer.propTypes = {
        active: PropTypes.bool,
        background: PropTypes.string,
        className: PropTypes.string,
        duration: PropTypes.number,
        name: PropTypes.string,
        setActive: PropTypes.func
    }

    return WithTimer
}

export default withTimer
