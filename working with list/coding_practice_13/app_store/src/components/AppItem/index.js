import './index.css'

const AppItem = (props)=>{

    const{appsobject} = props
    const{appId, appName,imageUrl,category} = appsobject;


    return(
        <>
        <li>
            <div className="app-list-contianr">
                <img src={imageUrl}
                    className="image-app" alt="imag"/>

                    {/* <h1 className="heading-app">{appName}</h1> */}
                    {/* <p className="category-app">{category}</p> */}
            </div>
        </li>
        </>
    )


}

export default AppItem;