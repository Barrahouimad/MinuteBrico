import React,{useContext, useEffect,useState} from 'react'
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
import Cookies from 'js-cookie';
import Axios from "axios"
import Context from '../Shared/context';
import { StoreTwoTone } from '@material-ui/icons';
const Main = ()=>{
   const stoor=useContext(ThemeContext);
//the data 
const [data,setData]=useState([]);

//read data based on token

Axios.get("http://localhost:8080/bricoleurtoken/"+ Cookies.get('Token'))

 .then(res=>{
      console.log("reponse du db sur login  : "+res.data.id);
      if(res.data.length!=0){
      setData(res.data);
      }
  })  
  .catch(err =>{
    console.log("still have error ",err);
  })


  //stoor.setAuth(true);
 console.log("store value in main : "+stoor.Auth+ "  the id is : "+ stoor.user.id);  
 
   return(
      <div>
         <Switch>
            <Route exact path='/' component={()=><Home1 data={data}  />}/>
             <Route path='/home' component={()=><Home1  data={data}  />}/>
             <Route path='/missions' component={()=><Mission  data={data} />}/>
             <Route path='/sign-up' component={Signup}/>
             <Route path='/bricosignup' component={SignUpEtape2}/>
             <Route exact path="/login" component={()=><Login  />} />
             <Route path='/postulemissions' component={()=> <PostuleMission  user={data} /> }/>
               
             <Redirect to="/home"/>
         </Switch>

         </div>
);  
}
export default Main; 