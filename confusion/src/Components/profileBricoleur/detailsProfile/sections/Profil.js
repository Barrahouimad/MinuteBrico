import React, { useState, useEffect } from "react";
import axios from "axios";


function Profil() {
    const [ProfilDescreption, setProfilDescreption] = useState("");
    const profileData = async () => {
        try {
         
          const res = await axios.get("http://localhost:8080/bricoleurs/150");
          setProfilDescreption(res.data.descriptionProfil);
          
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        profileData();
      }, []);
    return (
        <div className = "profil mb5">
            <h3 id="h3">à propos de moi</h3>
            <p id="p">
              {ProfilDescreption}
            </p>
        </div>
    )
}


export default Profil