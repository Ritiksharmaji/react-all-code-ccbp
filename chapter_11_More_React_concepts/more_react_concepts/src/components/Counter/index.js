import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    // // using callback function
    // this.setState((prevState) => ({ count: prevState.count + 1 }))
    // this.setState((prevState) => ({ count: prevState.count + 1 }))
    // this.setState((prevState) => ({ count: prevState.count + 1 }))

    // // check using object 
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
    // // so here by using the object it is ok but that all the setState() method not except propally beacuse 
    // // setState() is asynchosy method it will not change data inmediacty,
    //so by clicking only on value will change. 
    // // so to ovide it will must have to use the callback so that it will take previus value.

    // using call back function
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))

  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    console.log('render() called')
    const {count} = this.state
    return (
      <div className="counter-container">
        <p className="count">Count {count}</p>
        <div>
          <button className="increase-button" 
                  onClick={this.onIncrement}>
            Increase
          </button>
          <button className="decrease-button" 
                  onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
