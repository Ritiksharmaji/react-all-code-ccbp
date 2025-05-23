import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {

  state={
    clockShow:false
  }
  constructor(props){
    super(props)
      this.state = {date: new Date()}
      console.log("this is constructer called")
    }
  
    componentDidMount=()=>{

      console.log("componentDidMount of components life cycle called")
    }
  
  changestateClock = ()=>{
    this.setState(previous=>({
      clockShow: ! previous.clockShow 
    }))
  }

  render() {

    console.log("render method will called of components life cycle method")
    const{date} = this.state
    console.log(date)
    const{clockShow} = this.state
    const isClockShow = clockShow ? ' Hide Clock':' show Clock'

    return (
      <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.changestateClock}>
          {isClockShow}
        </button>
        {clockShow && <Clock date={date}/>}
        
      </div>
    )
  }
}

export default App
