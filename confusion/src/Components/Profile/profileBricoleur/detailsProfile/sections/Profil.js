import React, { useState, useEffect } from "react";
import axios from "axios";


function Profil(props) {
    const [ProfilDescreption, setProfilDescreption] = useState("");
    const [profileName, setProfileName] = useState("");
    const profileData = async () => {
        try {
         
          const res = await axios.get("http://localhost:8080/bricoleurs/"+props.user.id);
          //alert("from profile "+props.user.id)
          setProfilDescreption(res.data.descriptionProfil);
          setProfileName(
            `${res.data.firstName} ${res.data.lastName}`
          );
          
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        profileData();
      });

      if(props.user.length!=0)  { return (
        <div className = "profil mb5">
            <h6>à propos de {profileName}</h6>
            <p>
              {ProfilDescreption}
            </p>
        </div>
    )}
}


export default Profil