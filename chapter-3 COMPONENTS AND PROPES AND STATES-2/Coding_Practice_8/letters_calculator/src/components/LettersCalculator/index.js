import{Component} from 'react'
import './index.css'

class LettersCalculator extends Component{

    state={
        number:0
    }

    calculatePhase = ()=>{
        this.setState(previ=>({
            number:previ.number+1
        }))
    }

    render(){

        const{number} = this.state
        return(
            <>
            <div className='calculater-container'>
                <div className='card-container-calculater'>
                    <div className='text-area-card-container-calculater'>
                        <h1 className='heading-calculater'>Calculate the Letters you enter</h1>
                        <label className='heading-input-element'>Enter the phrase</label>
                       
                       <div className='input-contianer'>
                       <input type='text' className='input-filed' placeholder='Enter the Phase' 
                        onChange={this.calculatePhase}
                        />

                       </div>
                        <div className='submit-button-calculater-container'> 
                            <p className='paragraph-total-phase'>No.of letters: {number} </p>
                        </div>
                    </div>

                    <div className='image-container-card-caontainer-clculater'>
                        <img src='https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png' 
                        className='image-calclater'
                        alt='letters calculator'/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default LettersCalculator