

const TabItem = (props)=> {
    const{eachTab,updateIdMethod} =props
    const{tabId,displayText}= eachTab

    const method = ()=>{
        updateIdMethod(tabId)
    }

    return(
        <>
        <li className="order-Tab-list">
            <button className="btn btn" onClick={method}>
            {displayText}
            </button>
            
        </li>
        </>
    )

}
export default TabItem;