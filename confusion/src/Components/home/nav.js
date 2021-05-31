import React,{useState} from 'react';
import {Link} from "react-router-dom"
import './style.css';
import Cookies from 'js-cookie';
import Axios from "axios"
import { SettingsInputAntennaSharp, SettingsSystemDaydreamTwoTone } from '@material-ui/icons';

 const Nav=(props)=>   {
 const [pop,setPop]=useState(false);
  if(props.data.length!=0 && props.data.role=="Bricoleur"){


    return (
      <div className="navbar">
        <Link to="/home" ><img alt="..." src="/assets/logo.png" className="logo" /></Link>
        <ul className="center">
          <Link to="/missions" ><li>Missions</li></Link>
          <Link id="mespostules"  to="/postulemissions" ><li>Mes postules</li></Link>
        </ul>
      <div className="d-flex content-justify-between">
          <div className="p-2" style={{boxShadow:"2px 2px 6px", borderRadius:"62px" ,height:"50px",width:"50px"}} >
            <img style={{borderRadius:"62px", height:"100%",width:"100%"}} src="assets/career.png"/>
          </div>
  
         <button onClick={()=>setPop(!pop)} ><i class="fa fa-user-circle"></i>  {props.data.firstName+" "+props.data.lastName}</button>
   
  
        {pop &&  <ul class=" menu-overr main-menu menu">
           <Link to="/profile" ><li class=" item-over menu-item menu-item-has-children dropdown">Profile</li></Link>
           <Link to="/editprofile" > <li class=" item-over menu-item menu-item-has-children dropdown">Parametres</li></Link>
           <button onClick={()=>{Cookies.set('Token',null);  document.location.href="http://localhost:3000/home";}} style={{borderRadius:"22px", height:"",width:""}} className="btn btn-outline-danger p-2 mb-4">Logout </button>
            
        </ul>
        }
       
           </div>
      </div>
    );



  }else  if(props.data.length!=0 && props.data.role=="Client"){
    return (
    <div className="navbar">
    <Link to="/home"><img alt="..." src="/assets/logo.png" className="logo" /></Link>
    <ul className="center">
      <Link to="/missions" ><li>Missions</li></Link>
      <Link  to="/createMission" ><li>Créer Mission</li></Link>

    </ul>
<div className="d-flex content-justify-between">
      <div className="p-2" style={{boxShadow:"2px 2px 6px", borderRadius:"62px" ,height:"50px",width:"50px"}} >
        <img style={{borderRadius:"62px", height:"100%",width:"100%"}} src="/assets/career.png"/>
      </div>

   



      <button onClick={()=>setPop(!pop)} ><i class="fa fa-user-circle"></i>  {props.data.firstName+" "+props.data.lastName}</button>
   
  
   {pop &&  <ul class=" menu-overr main-menu menu">
              <Link to="/Mesmissions" ><li>Mes Créations</li></Link>
              <Link to="/editprofile" > <li class=" item-over menu-item menu-item-has-children dropdown">Parametres</li></Link>
      <button onClick={()=>{Cookies.set('Token',null);  document.location.href="http://localhost:3000/home";}} style={{borderRadius:"22px", height:"",width:""}} className="btn btn-outline-danger p-2 mb-4">Logout </button>
       
   </ul>
   }




    
    </div>
  </div>
    )}

  else{
    console.log("the new auth in else ")
    return (
      <div className="navbar">
        <Link to="/home"><img alt="..." src="/assets/logo.png" className="logo" /></Link>
        <ul className="center">
          <Link to="/how-it-works" ><li>Comment ça marche</li></Link>
          <Link to="/missions" ><li>Missions</li></Link>
        </ul>

        <ul className="auth">
          <Link to="/login" ><li className="seconnect">Se connecter</li></Link>
          <Link to="/sign-up" ><li className="signup">S'incrire</li></Link>
        </ul>

      </div>
    );
  }


   

}
export default Nav;