import './index.css'

const AppItem = (props)=>{

    const{appsobject} = props
    const{appId, appName,imageUrl,category} = appsobject;


    return(
        <>
        <li className="app-item">
                <img src={imageUrl}
                    className="app-image"  alt="imag"/>
                    {/* <h1 className="heading-app">{appName}</h1> */}
                    <p className="app-name">{appName}</p>
          
        </li>
        </>
    )


}

export default AppItem;