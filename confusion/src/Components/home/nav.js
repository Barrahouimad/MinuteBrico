import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './style.css';
import Cookies from 'js-cookie';
import Axios from "axios"
import { SettingsInputAntennaSharp, SettingsSystemDaydreamTwoTone } from '@material-ui/icons';

const Nav = (props) => {
  const [pop, setPop] = useState(false);
  if (props.data.length != 0 && props.data.role == "Bricoleur") {


    return (
      <div className="navbar">
        <Link to="/home" ><img style={{ width: "125px", height: "103px", marginBottom: "10px" }} alt="..." src="/assets/logo.png" className="logo" /></Link>
        <ul className="center">
          <Link to="/missions" ><li>Missions</li></Link>
          <Link id="mespostules" to="/postulemissions" ><li>Mes postules</li></Link>
        </ul>
        <div className="d-flex content-justify-between">


          <button onClick={() => setPop(!pop)} >{props.data.firstName + " " + props.data.lastName} <i class="fa fa-chevron-circle-down" aria-hidden="true"></i> </button>

          {pop && <ul class=" menu-overr main-menu menu">
            <Link to="/profile" ><li class=" item-over menu-item menu-item-has-children dropdown"><i class="fa fa-user" aria-hidden="true"></i> Profil</li></Link>
            <Link to="/editprofile" > <li class=" item-over menu-item menu-item-has-children dropdown"><i class="fa fa-cog" aria-hidden="true"></i> Paramètres</li></Link>
            <button onClick={() => { Cookies.set('Token', null); document.location.href = "http://localhost:3000/home"; }} style={{ borderRadius: "22px", height: "", width: "" }} className="btn btn-outline-danger p-2 mb-4"><i class="fa fa-sign-out" aria-hidden="true"></i> Déconnexion </button>

          </ul>
          }

        </div>
      </div>
    );



  } else if (props.data.length != 0 && props.data.role == "Client") {
    return (
      <div className="navbar">
        <Link to="/home"><img alt="..." src="/assets/logo.png" className="logo" /></Link>
        <ul className="center">
          <Link to="/missions" ><li>Missions</li></Link>
          <Link to="/createMission" ><li>Créer Mission</li></Link>

        </ul>
        <div className="d-flex content-justify-between">






          <button onClick={() => setPop(!pop)} >{props.data.firstName + " " + props.data.lastName} <i class="fa fa-chevron-circle-down" aria-hidden="true"></i> </button>


          {pop && <ul class=" menu-overr main-menu menu">
            <Link to="/Mesmissions" ><li> <i class="fa fa-list" aria-hidden="true"></i> Mes missions</li></Link>
            <Link to="/editprofile" > <li class=" item-over menu-item menu-item-has-children dropdown"><i class="fa fa-cog" aria-hidden="true"></i> Paramètres</li></Link>
            <button onClick={() => { Cookies.set('Token', null); document.location.href = "http://localhost:3000/home"; }} style={{ borderRadius: "22px", height: "", width: "" }} className="btn btn-outline-danger p-2 mb-4"><i class="fa fa-sign-out" aria-hidden="true"></i> Déconnexion </button>

          </ul>
          }





        </div>
      </div>
    )
  }

  else {
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
          <Link to="/sign-up" ><li className="signup">S'inscrire</li></Link>
        </ul>

      </div>
    );
  }




}
export default Nav;