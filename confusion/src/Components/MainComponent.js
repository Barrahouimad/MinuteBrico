import react from 'react'
import Mission from './MissionsComponent';
import Home from './HomeComponent';
import { Redirect, Switch,Route, Router}  from 'react-router-dom';

const Main = ()=>{
  
   return(
         <Switch>
            <Route path='/' component={Home}/>
            <Route path='/home' component={Home}/>
             <Route path='/missions' component={Mission}/>
             <Redirect path='/home'/>
         </Switch>
);  
}
export default Main; 