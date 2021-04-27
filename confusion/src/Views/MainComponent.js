import React,{useContext, useEffect} from 'react'
import Mission from '../Components/mission/MissionsComponent';
//import {Cookies} from 'js-cookie';
import {ThemeContext} from '../App'
import Home from '../Components/HomeComponent';
import Home1 from './Home1';
import Protectedroute from './ProtectedRoute';
import Signup from '../Components/auth/signup';
import SignUpEtape2 from '../Components/auth/signUpEtape2';
import Login from '../Components/auth/login' ;
import { Redirect, Switch,Route}  from 'react-router-dom';
import PostuleMission from '../Components/mission/postuleMissions';
import Context from '../Shared/context';
import { StoreTwoTone } from '@material-ui/icons';
const Main = ()=>{
   const stoor=useContext(ThemeContext);
  //stoor.setAuth(true);
 // console.log("store value in main : "+stoor.Auth+ "  the id is : "+ stoor.user.id);  
  const {store,actions}=useContext(Context);
  console.log("from main storeTwo value in main : "+store.auth+ "  the id is : ");  

   return(
      <div>
         <Switch>
            <Route exact path='/' component={()=><Home1 user={stoor.user} setId={stoor.setId} auth={stoor.Auth} setAuth={stoor.setAuth} />}/>
             <Route path='/home' component={()=><Home1 user={stoor.user} setId={stoor.setId} auth={stoor.Auth} setAuth={stoor.setAuth} />}/>
             <Route path='/missions' component={()=><Mission user={stoor.user} setId={stoor.setId} auth={stoor.Auth} setAuth={stoor.setAuth}/>}/>
             <Route path='/sign-up' component={Signup}/>
             <Route path='/bricosignup' component={SignUpEtape2}/>
             <Route exact path="/login" component={()=><Login user={stoor.user} setId={stoor.setId} auth={stoor.Auth} setAuth={stoor.setAuth} />} />
             <Route path='/postulemissions' component={()=> <PostuleMission user={stoor.user} setId={stoor.setId} auth={stoor.Auth} setAuth={stoor.setAuth}/> }/>
               
             <Redirect to="/home"/>
         </Switch>

         </div>
);  
}
export default Main; 