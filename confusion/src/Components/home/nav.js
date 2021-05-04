import React,{useState} from 'react';
import {Link} from "react-router-dom"
import './style.css';
import Cookies from 'js-cookie';
import Axios from "axios"
import { SettingsInputAntennaSharp, SettingsSystemDaydreamTwoTone } from '@material-ui/icons';

 const Nav=(props)=>   {

  if(props.data.length!=0 && props.data.role=="Bricoleur"){


    return (
      <div className="navbar">
        <Link to="/home"><img alt="..." src="/assets/logo.png" className="logo" /></Link>
        <ul className="center">
          <Link to="/missions" ><li>Missions</li></Link>
          <Link id="mespostules" className="p-2" to="/postulemissions" >Mes postules</Link>
        </ul>
  <div className="d-flex content-justify-between">
          <div className="p-2" style={{boxShadow:"2px 2px 6px", borderRadius:"62px" ,height:"50px",width:"50px"}} >
            <img style={{borderRadius:"62px", height:"100%",width:"100%"}} src="assets/career.png"/>
          </div>
          <p className="p-2">{props.data.firstName+" "+props.data.lastName}</p>
          <button onClick={()=>{Cookies.set('Token',null);  document.location.href="http://localhost:3000/home";}} style={{borderRadius:"22px", height:"",width:""}} className="btn btn-outline-danger p-2 mb-4">Logout </button>
        </div>
      </div>
    );



  }else{
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