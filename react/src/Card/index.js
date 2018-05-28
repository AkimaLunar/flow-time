import React from 'react'
import Portal from '../Portal'

import style from './style.css'

class Card extends React.PureComponent {
  cardId = null
  state = { counter: 15, showWindowPortal: false }

  tick = () => {
    if (this.state.counter <= 0) {
      this.stopTimer()
    } else {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  startTimer = () => {
    this.setState({ active: true, showWindowPortal: true })
    this.cardId = setInterval(
      () => this.tick(),
      1000
    )
  }

  pauseTimer = () => {
    clearInterval(this.cardId)
    this.setState({ active: false })
  }

  stopTimer = () => {
    clearInterval(this.cardId)
    this.setState({ active: false, counter: 15, showWindowPortal: false })
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
      <section className={style.card}>
        <p>{this.state.counter}</p>
        <button onClick={this.toggleTimer}>
          {this.state.active ? 'Pause' : 'Start'}
        </button>
        <button onClick={this.stopTimer}>Close</button>

        {this.state.showWindowPortal && (
          <Portal>
            <div className={style.timer}>
              <p>{this.state.counter}</p>
              <div className={style.buttongroup}>
                <button onClick={() => this.toggleTimer()}>
                  {this.state.active ? 'Pause' : 'Start'}
                </button>
                <button onClick={() => this.stopTimer()}>Close</button>
              </div>
            </div>
          </Portal>
        )}
      </section>
    )
  }
}

export default Card
