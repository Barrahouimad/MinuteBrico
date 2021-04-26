import React from 'react'
import {Route,Redirect} from 'react-router-dom';
const Protectedroute =({auth,component:Component,...libka})=>
{
    return(
        <Route  
        {...libka}
        render={
            ()=>auth?(
                <component/>
            ):
            <Redirect to="/login" />
        }
        />
    );

}

export default Protectedroute;