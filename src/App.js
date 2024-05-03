import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  toggleButton = () => {
    this.setState(pervState => ({showClock: !pervState.showClock}))
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toggleButton}
        >
          {showClock ? 'Hide Clock' : 'show clock'}
        </button>
        {showClock ? <Clock /> : null}
      </div>
    )
  }
}

export default App
