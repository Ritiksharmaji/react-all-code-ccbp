
import {Component} from 'react'
import './index.css'

class CoinToss extends Component{

    
state = {
    heads:0,
    tells:0,
    TotalCoinToss:0,
    Toss_Image:'https://assets.ccbp.in/frontend/react-js/heads-img.png'
}
    DoTossCoinMethod = ()=>{
        const HeadImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        const TellImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
        const tossResult = Math.floor(Math.random() * 2) 
        const result = tossResult % 2 === 0 ?  HeadImage : TellImage
        console.log("result: " +result)

        this.setState(previous=>
        ({
           TotalCoinToss:previous.TotalCoinToss+= 1,
        }))

        if(result === HeadImage){
            this.setState(previousHead=>
                ({
                   heads: previousHead.heads += 1 ,
                   Toss_Image:HeadImage
                }))
        }else{
            this.setState(previousHead=>
                ({
                   tells: previousHead.tells += 1,
                   Toss_Image:TellImage
                }))
        }
    }

    render(){

        const{heads, tells, Toss_Image,TotalCoinToss} = this.state;
        return(
            <>
            <div className='toss-coin-container'>
                <div className='card-contianer-toss-coin'>
                    <h1 className='heading-toss-coin-card-container'>
                        Coin Toss Game
                    </h1>
                    <p className='paragraph-toss-coin-card-container'>
                        Heads Or Tells
                    </p>
                    <img src={Toss_Image} className='image-card-container-toss-coin' alt='ima'/>
                   
                   <div className='toss-button-contianer'>
                   <button type='submit' className='do-toss-button' onClick={this.DoTossCoinMethod}>Toss</button>
                   </div>


                    <div className='total-heads-tells-card-contianer'>
                        <p className='total-toss'>Total: {TotalCoinToss}</p>
                        <p className='total-heads'>Heads: {heads} </p>
                        <p className='total-tells'>Tails: {tells} </p>
                    </div>
                </div>
            </div>
            </>
        )
    }

}
export default CoinToss;