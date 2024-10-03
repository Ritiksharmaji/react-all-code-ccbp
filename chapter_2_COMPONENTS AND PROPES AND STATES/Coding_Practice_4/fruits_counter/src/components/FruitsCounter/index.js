// Write your code here

import './index.css'
import {useState} from 'react'
const FruitsCounter = () => {
  let [mangos, setMangoes] = useState(0)
  let [banana, setBanans] = useState(0)

  const changeMango = () => {
    mangos = mangos + 1
    setMangoes(mangos)
  }

  const changeBanana = () => {
    banana = banana + 1
    setBanans(banana)
  }

  return (
    <>
      <div className="fruits-counter-container">
        <div className="card-fruits-counter-container">
          <h1 className="heading-fruit">
            Bob ate {mangos} mangoes {banana} bananas
          </h1>
          <div className="card-container-fruit">
            <div className="fruit-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="friut-fruit-image"
              />
              <button
                type="submit"
                className="mango-count-button fruit-button"
                onClick={changeMango}
              >
                Eat Mango
              </button>
            </div>

            {/* this is for banana container */}

            <div className="fruit-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="friut-fruit-image"
              />
              <button
                type="submit"
                className="banana-count-button fruit-button"
                onClick={changeBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FruitsCounter
