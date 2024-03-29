import React,{useContext, useEffect,useState} from 'react'
import Mission from '../Components/mission/MissionsComponent';
//import {Cookies} from 'js-cookie';
import {ThemeContext} from '../App'
import Home from '../Components/HomeComponent';
import Home1 from './Home1';
import Protectedroute from './ProtectedRoute';
import ContainerAuth from '../Components/auth/authentification/containerAuth';
import SignUpEtape2 from '../Components/auth/signUpEtape2';
import Login from '../Components/auth/login' ;
import { Redirect, Switch,Route}  from 'react-router-dom';
import PostuleMission from '../Components/mission/postuleMissions';
import ClientMissions from '../Components/mission/ClientMissions/ClientMisions';
import DetailsMissions from '../Components/mission/ClientMissions/Detailsmission'
import Container from '../Components/mission/formmission/container'
import Cookies from 'js-cookie';
import Axios from "axios"
import ContainerEdit from '../Components/Profile/editProfile/containerEdit';
import Single from '../Components/Leblog/single/Single'
import Single1 from '../Components/Leblog/single/Single1'
import Single2 from '../Components/Leblog/single/Single2'
import Single3 from '../Components/Leblog/single/Single3'
import Single4 from '../Components/Leblog/single/Single4'
import Single5 from '../Components/Leblog/single/Single5'
import Context from '../Shared/context';
import { StoreTwoTone } from '@material-ui/icons';
import ProfileBricoleurDetails from '../Components/Profile/profileBricoleur/detailsProfile/ProfileBricoleurDetails'  
import ClientToBrico from '../Components/Profile/profileBricoleur/clientToBrico'
import ContainerBrico from '../Components/switchBrico/containerBrico';
import Form4 from '../Components/Profile/editProfile/form4';
const Main = ()=>{
   const stoor=useContext(ThemeContext);
//the data 
const [data,setData]=useState([]);
var href;
if(Cookies.get('Role')=="Bricoleur"){
   href="http://localhost:8080/bricoleurtoken/"+ Cookies.get('Token');
 }else{
   href="http://localhost:8080/Clienttoken/"+ Cookies.get('Token');
 }
//read data based on token
useEffect(()=>{
   Axios.get(href)

   .then(res=>{
        console.log("reponse du db sur login effect  : "+res.data.id);
        if(res.data.length!=0){
          // alert(res.data);
        setData(res.data);
        }
    })  
    .catch(err =>{
      console.log("still have error ",err);
    })
},[])

//stoor.setAuth(true);

console.log("store value in main : "+stoor.Auth+ "  the id is : "+ stoor.user.id+" data "+data);  
 
   return(
      <div>
        <Switch>
             <Route exact path='/' component={()=><Home1 data={data}  />}/>
             <Route path='/home' component={()=><Home1  data={data}  />}/>
             <Route path='/missions' component={()=><Mission  data={data} />}/>
             <Route path='/CreateMission'component={()=><Container  user={data} />}  />
             <Route path='/profile/:id' component={ClientToBrico} />
             <Route exact path='/profile' component={()=><ProfileBricoleurDetails  user={data} />} />
              <Protectedroute  auth={Cookies.get('Token')!=null} exact path="/editprofile" >
                     <ContainerEdit user={data} />
              </Protectedroute>
              <Protectedroute exact  path="/blog" >
                     <Single user={data} />
              </Protectedroute>
              <Protectedroute exact  path="/blog1" >
                     <Single1 user={data} />
              </Protectedroute>
              <Protectedroute exact  path="/blog2" >
                     <Single2 user={data} />
              </Protectedroute>
              <Protectedroute exact  path="/blog3" >
                     <Single3 user={data} />
              </Protectedroute>
              <Protectedroute exact  path="/blog4" >
                     <Single4 user={data} />
              </Protectedroute>
              <Protectedroute exact  path="/blo5" >
                     <Single5 user={data} />
              </Protectedroute>
             <Route path='/sign-up' component={ContainerAuth}/>
             <Route path='/bricosignup' component={SignUpEtape2}/>
             <Route exact path="/login" component={()=><Login  />} />
             <Route  path="/switch" component={()=><ContainerBrico user={data}/>} />
             <Route path='/postulemissions' component={()=> <PostuleMission  user={data} /> }/>
             <Route path='/Mesmissions' component={()=><ClientMissions data={data}/> }/>

             <Protectedroute  auth={Cookies.get('Token')!=null} exact path='/mdp' >
                     <Form4 user={data} />
              </Protectedroute>
             <Route path='/carddetails/' component={()=><DetailsMissions data={data}/> }/>
             <Redirect to="/home"/>
         </Switch>
         </div>
);  
}
export default Main; 