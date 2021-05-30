import React, { useState, useEffect } from "react";
import axios from "axios";


function Profil(props) {
    const [ProfilDescreption, setProfilDescreption] = useState("");
    const [profileName, setProfileName] = useState("");
    const profileData = async () => {
        try {
         
          const res = await axios.get("http://localhost:8080/bricoleurs/"+props.user.id);
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
      }, []);
    return (
        <div className = "profil mb5">
            <h3>à propos de {profileName}</h3>
            <p>
              {ProfilDescreption}
            </p>
        </div>
    )
}


export default Profil