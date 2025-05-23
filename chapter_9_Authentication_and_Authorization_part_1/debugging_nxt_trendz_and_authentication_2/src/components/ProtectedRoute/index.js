import React from 'react';
import {Redirect,Route} from 'react-router-dom'
import Cookies from 'js-cookie'
// import Home from '../Home';

const ProtectedRoute = (props) => {

    const jwt_token = Cookies.get("jwt_token")
    if(jwt_token === undefined){
        return <Redirect to='/login'/>
    }else{
        // return <Route exact path="/" component={Home} />
        return <Route {...props} />
    }
}

export default ProtectedRoute;
