
import './index.css'
const TabItem = (props)=> {
    const{eachTab,updateIdMethod ,IsActive} =props
    const{tabId,displayText}= eachTab

    const method = ()=>{
        updateIdMethod(tabId)
    }

    const  style_active_id = IsActive ? "active-tab-btn":" ";

    return(
        <>
        <li className="order-Tab-list">
            <button className={`tab-btn ${style_active_id}`} onClick={method}>
            {displayText}
            </button>
            
        </li>
        </>
    )

}
export default TabItem;