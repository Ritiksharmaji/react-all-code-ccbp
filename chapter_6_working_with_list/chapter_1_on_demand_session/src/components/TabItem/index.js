import './index.css'

const TabItem = props => {
  const {tabDetails,updateTabId,IsActive} = props
  const {displayText,tabId} = tabDetails

  const method= ()=>{
    updateTabId(tabId)
  }
  

  const  style_active_id = IsActive ? "active-tab-btn":" ";
    
  
  return (
    <li className="tab-item-container ">
      <button type="button" className= {`tab-btn ${style_active_id}`} onClick={method}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
