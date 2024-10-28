import {Component} from 'react'

import './index.css'

class Greetings extends Component {
  state = {
    userInput: '',
    browserInput:'',

  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeUserInputBrowser = event =>{
    this.setState({browserInput:event.target.value

    })
  }

  render() {
    const {userInput , browserInput} = this.state
    return (
      <div className="greetings-container">
        <div className="responsive-container">
          <p>React controll</p>
          <input
            type="text"
            className="input-filed"
            value={userInput}
            onChange={this.onChangeUserInput}
          />
          <p className="paragraph">Hello, {userInput}</p>
        </div>

        {/* uncontroll  */}
        <div className="responsive-container">
          <p>Browser controll(uncontroll)</p>
          <input
            type="text"
            className="input-filed"
            // value={userInput}
            onChange={this.onChangeUserInputBrowser}
          />
          <p className="paragraph">Hello, {browserInput}</p>
        </div>
      </div>
    )
  }
}

export default Greetings
