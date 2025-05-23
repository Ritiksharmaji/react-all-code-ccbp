import {Component} from 'react'
import './index.css'

class Clock extends Component {

    constructor(props){
        super(props)
          this.state = {date: new Date()}
          console.log("this is constructer called")
        }

    componentDidMount=()=>{
            console.log("componentDidMount of components life cycle called")
            this.timerID = setInterval(this.updateDate,1000)
            // here setInterval will return the timer id which shoub be stop at paticular time
          }

          // this is for unmounting phase
          componentDidUnmounting = ()=>{
            clearInterval(this.timerID)
            console.log("the componentDidUnmounting phase occure of components life cycle")
          } 
        // for update state of componets life cycle
        updateDate =()=>{
            this.setState({date:new Date()})
            console.log("update phase of components life cycle")
        }


  render() {
    console.log("render method will called of components life cycle method")
    const{date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className='time'>{date.toLocaleTimeString()}</p>
        {/* <p className='time'>{date.toLocaleDateString()}</p> */}
      </div>
    )
  }
}
export default Clock
