// Write your code here
import './index.css'
import {useState} from 'react'

const Speedometer = () => {
  let [speed, setSpeed] = useState(0)

  const increaseSpeed = () => {
    if (speed < 200) {
      speed += 10
      setSpeed(speed)
    } else {
      // show the error sms
    }
    console.log(`the ${speed} is increse the speed by 10 mph`)
  }

  const decreaseSpeed = () => {
    if (speed > 0) {
      speed -= 10
      setSpeed(speed)
    } else {
      // show the error sms
    }
    console.log(`the ${speed} is dearease the speed by 10 mph`)
  }

  return (
    <div className="speed-container">
      <h1 className="speed-heading">SPEEDOMETER</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
        alt="speedometer"
        className="speedometer-image"
      />

      <h1 className="speed-speed">Speed is {speed}mph</h1>
      <p className="speed-paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
      <div className="button-container">
        <button class="speed-button" onClick={increaseSpeed}>
          Accelerate
        </button>
        <button class="speed-button" onClick={decreaseSpeed}>
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default Speedometer
