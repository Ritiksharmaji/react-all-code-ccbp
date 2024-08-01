

import './index.css'
const SuggestionItem = (props)=>{

const{item} = props;
const{suggestion,id }= item;
console.log(item);

return(
  
<li>{suggestion}</li>
  
    
    
)
}
export default SuggestionItem;