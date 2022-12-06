// Write your code here
import {Component} from 'react'

class StopWatch extends Component {
  state = {
    timeRunning: false,
    currentHour: 0,
    currentMinutes: 0,
  }

  clock = () => {
    const {currentMinutes} = this.state
    this.setState({currentMinutes: currentMinutes + 1})
  }

  getHoursAndMinutes = time => {
    const {currentHour, currentMinutes} = this.state
    const remainingMinutes = currentHour * 60 + currentMinutes
    const hours = Math.floor(remainingMinutes / 60)
    const minutes = Math.floor(remainingMinutes % 60)

    const stringifiedHours = hours > 9 ? hours : `0${hours}`
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    if (time === false) {
      clearInterval(this.intervalId)
      return `${stringifiedHours}:${stringifiedMinutes}`
    }
    return `${stringifiedHours}:${stringifiedMinutes}`
  }

  startTime = () => {
    const {timeRunning} = this.state
    //
    this.intervalId = setInterval(this.clock, 1000)
    this.setState({timeRunning: !timeRunning})
  }

  stopTime = () => {
    clearInterval(this.intervalId)
    const {timeRunning} = this.state
    this.setState({timeRunning: !timeRunning})
  }

  resetTime = () => {
    clearInterval(this.intervalId)
    this.setState({
      timeRunning: false,
      currentHour: 0,
      currentMinutes: 0,
    })
  }

  render() {
    const {timeRunning} = this.state
    console.log(timeRunning)
    return (
      <div className="bg-container">
        <div className="clock-container">
          <h1>Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{this.getHoursAndMinutes(timeRunning)}</h1>
            <div className="buttons-container">
              <button
                type="button"
                onClick={this.startTime}
                className="start-button"
              >
                Start
              </button>
              <button type="button" onClick={this.stopTime}>
                Stop
              </button>
              <button type="button" onClick={this.resetTime}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
