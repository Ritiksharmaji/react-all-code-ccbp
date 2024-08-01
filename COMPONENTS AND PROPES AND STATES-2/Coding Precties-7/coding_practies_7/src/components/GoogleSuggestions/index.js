import { Component } from 'react';
import SuggestionItem from '../SuggestionItem';
import './index.css'

class GoogleSuggestions extends Component{

    

state = {
    text:this.props.suggestionsList
}

 changeListmethod = (event)=>{

    this.setState({text:event.target.value})
   
}


render(){
    const{text} = this.state;
    const{suggestionsList} = this.props;
    console.log(text)
    const searchResults = suggestionsList.filter(eachDestination =>
        eachDestination.suggestion.toLowerCase().includes(text.toLowerCase()),
    )

    return(
        
        <>
        <div className='goggle-container'>
            <div className='google-card-container'>
                <h1 className='google-title'>GOOGLE</h1>
                <div className='google-search-list-container'>
                    <input type='search' className='seacrh-google' 
                     onChange={this.changeListmethod}
                    />
                    <div className='search-list-container'>
                        <ul className='suggestion-item'>
                            {
                              searchResults.map((eachitem)=>(
                                <SuggestionItem 
                                item={eachitem} 
                                key = {eachitem.id}
                                />
                              ))  
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


}

export default GoogleSuggestions;