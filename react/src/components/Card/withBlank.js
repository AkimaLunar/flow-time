import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styles from './styles'
import Line from '../Line'

const withBlank = Component => {
    class WithBlank extends React.Component {
        state = { counter: 1, editing: false }

        toggleEdit = () => this.setState({ editing: !this.state.editing })

        onEdit = e => this.setState({ counter: e.target.value })

        onAdd = () => {
            const newTimer = {
                _id: uuid(),
                duration: Number(this.state.counter),
                name: 'Custom Timer'
            }
            this.props.addTimer && this.props.addTimer(newTimer)
            this.setState({ editing: false })
        }

        render() {
            return (
                <Component {...this.props} blank>
                    {this.state.editing ? (
                        <React.Fragment>
                            <Line className={styles.lineDark} />
                            <input
                                value={this.state.counter}
                                onChange={this.onEdit}
                                type="number"
                            />
                            <div className={styles.buttonGroup}>
                                <button onClick={this.onAdd}>ADD</button>
                                <button onClick={this.toggleEdit}>
                                    CANCEL
                                </button>
                            </div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Line className={styles.lineDark} />
                            <p
                                className={styles.addText}
                                onClick={this.toggleEdit}
                            >
                                Need a different timer?
                            </p>
                        </React.Fragment>
                    )}
                </Component>
            )
        }
    }

    WithBlank.displayName = `withBlank(${Component.displayName ||
        Component.name})`

    WithBlank.propTypes = {
        className: PropTypes.string,
        addTimer: PropTypes.func
    }

    return WithBlank
}

export default withBlank
