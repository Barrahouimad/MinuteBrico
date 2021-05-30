import React from 'react'

import './ProfileBricoleurDetails.css';
import Localisation from './sections/Localisation';
import User from './sections/User';
import Profil from './sections/Profil'
import Langues from './sections/Langues';
import FormationDomaines from './sections/FormationDomaines';
import Avis from './sections/Avis';
import Nav from '../../../home/nav';

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
    return (
      <div className="App">
        <Nav data={props.user} />
        <div className="grid__container">
          <div className="sidebar">
            <User user={props.user}  />
            <Localisation user={props.user}/>
            <Langues user={props.user}/>
          </div>
          <div className="main">
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
