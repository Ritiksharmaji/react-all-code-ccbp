
const Thumbnailitem =(props)=>{

const{item,changeTextidmethod} = props;
const{thumbnailUrl,thumbnailAltText,id} = item

const bodyImageChange = ()=>{

    changeTextidmethod(id)
}

return(

    <li className="order-list-contianer"> 
    <button type="submit" className="button"  onClick={bodyImageChange}>
    <img src={thumbnailUrl} 
    alt={thumbnailAltText}
   
    />
    </button>
    </li>


)


}

export default Thumbnailitem;