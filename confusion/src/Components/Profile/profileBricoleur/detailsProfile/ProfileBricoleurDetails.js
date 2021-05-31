import React, { useEffect } from 'react'
import axios from "axios"
import './ProfileBricoleurDetails.css';
import Localisation from './sections/Localisation';
import User from './sections/User';
import Profil from './sections/Profil'
import Langues from './sections/Langues';
import FormationDomaines from './sections/FormationDomaines';
import Avis from './sections/Avis';
import Nav from '../../../home/nav';
import {Link} from 'react-router-dom';
 {/* TO DO  */}
        {/* Variables CSS */}
        {/* Colonne de gauche * /} 
                {/* Détails personnels - User */}
                {/* Compétences - skills */}
                {/* Formation  - education */}
                {/* Langues - skills */}
        {/* Colonne de droite * /} 
                {/* Profil - profil */}
                {/* Export PDF (react-html2pdf)  If u can */}


 function ProfileBricoleurDetails(props) {
 

  //alert(" second user id : "+props.user.id);
useEffect(()=>{

  
})
    return (
      <div className="App">
         <div className="grid__container">
           
          <div className="sidebar">

              <User user={props.user}  />
              <Localisation user={props.user}/>
              <Langues user={props.user}/>
          </div>
          <div className="main">
          <Link to="/home" ><img style={{width:"200px",height:"130px",marginBottom:"10px"}} alt="..." src="/assets/logo.png" className="logo" /></Link>

            <Profil user={props.user}/>
            <FormationDomaines user={props.user}/>
            <Avis user={props.user}/>
          </div>
        </div>
        <div className="inter">

        </div>
      </div>
    )
}

export default ProfileBricoleurDetails;
