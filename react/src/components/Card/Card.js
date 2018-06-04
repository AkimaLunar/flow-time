import React from 'react'
import PropTypes from 'prop-types'
import Portal from '../Portal'

class Card extends React.PureComponent {
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
            <section>
                <p>{this.state.counter}</p>
                <button onClick={this.toggleTimer}>
                    {this.state.active ? 'Pause' : 'Start'}
                </button>
                <button onClick={this.stopTimer}>Close</button>

                {this.state.showWindowPortal && (
                    <Portal>
                        <div>
                            <p>{this.state.counter}</p>
                            <div>
                                <button onClick={() => this.toggleTimer()}>
                                    {this.state.active ? 'Pause' : 'Start'}
                                </button>
                                <button onClick={() => this.stopTimer()}>
                                    Close
                                </button>
                            </div>
                            <h1>{this.props.name}</h1>
                        </div>
                    </Portal>
                )}
            </section>
        )
    }
}

Card.propTypes = {
    duration: PropTypes.number,
    name: PropTypes.string
}

export default Card
