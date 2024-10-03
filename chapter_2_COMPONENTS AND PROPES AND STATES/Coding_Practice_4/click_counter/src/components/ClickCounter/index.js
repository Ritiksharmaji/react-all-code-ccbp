import './index.css'
import {Component} from 'react'
import {useState} from 'react'

const ClickCounter = () => {
  let [count, setCount] = useState(0)

  const increaseCount = () => {
    count = count + 1
    setCount(count)
  }

  return (
    <div className="counter-container">
      <h1 className="counter-heading">
        The Button has been clicked <span className="total">{count}</span> times
      </h1>
      <p className="counter-paragraph">
        Click the button to increase the count
      </p>
      <button type="submit" class="submit-button" onClick={increaseCount}>
        Click me
      </button>
    </div>
  )
}

export default ClickCounter
