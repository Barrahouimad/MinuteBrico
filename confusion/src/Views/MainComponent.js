import React,{useContext} from 'react'
import Mission from '../Components/mission/MissionsComponent';

import {ThemeContext} from '../App'
import Home from '../Components/HomeComponent';
import Home1 from './Home1';
import Signup from '../Components/auth/signup';
import SignUpEtape2 from '../Components/auth/signUpEtape2';
import Login from '../Components/auth/login' ;
import { Redirect, Switch,Route}  from 'react-router-dom';

const Main = ()=>{
   const stoor=useContext(ThemeContext);
  console.log(stoor.name);

   return(
      <div>
         <Switch>
            <Route exact path='/' component={Home1}/>
             <Route path='/home' component={Home1}/>
             <Route path='/missions' component={Mission}/>
             <Route path='/sign-up' component={Signup}/>
             <Route path='/sign-upp' component={SignUpEtape2}/>
             <Route exact path="/login" >
                <Login />
             </Route>
             <Redirect to="/home"/>
         </Switch>

         </div>
);  
}
export default Main; 