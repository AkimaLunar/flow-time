import React from 'react'
import PropTypes from 'prop-types'
import Portal from '../Portal'
import Line from '../Line'
import styles from './styles'

const withTimer = Component => {
    class WithTimer extends React.Component {
        cardId = null
        state = { counter: 0, showWindowPortal: false }

        static getDerivedStateFromProps(nextProps) {
            if (nextProps.hasOwnProperty('duration')) {
                return { counter: nextProps.duration }
            }
            return null
        }

        tick = () => {
            if (this.state.counter <= 0) {
                this.stopTimer()
            } else {
                this.setState({ counter: this.state.counter - 1 })
            }
        }

        startTimer = () => {
            this.setState({ active: true, showWindowPortal: true })
            this.cardId = setInterval(() => this.tick(), 1000)
        }

        pauseTimer = () => {
            clearInterval(this.cardId)
            this.setState({ active: false })
        }

        stopTimer = () => {
            clearInterval(this.cardId)
            this.setState({
                active: false,
                counter: this.props.duration,
                showWindowPortal: false
            })
        }

        toggleTimer = () => {
            if (this.state.active) {
                this.pauseTimer()
            } else {
                this.startTimer()
            }
        }

        render() {
            return (
                <React.Fragment>
                    <Component {...this.props}>
                        <div
                            className={styles.timer}
                            onClick={this.toggleTimer}
                        >
                            <Line className={styles.line} />
                            <p>{this.state.counter}</p>
                            <h3>{this.props.name}</h3>
                        </div>
                    </Component>
                    {this.state.showWindowPortal && (
                        <Portal>
                            <div className={styles.portal}>
                                <div className={styles.buttonGroupCss}>
                                    <button onClick={() => this.toggleTimer()}>
                                        {this.state.active ? 'Pause' : 'Start'}
                                    </button>
                                    <button onClick={() => this.stopTimer()}>
                                        Close
                                    </button>
                                </div>
                                <p>{this.state.counter}</p>
                                <h1>{this.props.name}</h1>
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
        duration: PropTypes.number,
        name: PropTypes.string
    }

    return WithTimer
}

export default withTimer
