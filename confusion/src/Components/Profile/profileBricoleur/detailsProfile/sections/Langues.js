import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom"
import axios from 'axios'


function Langues(props) {
  const [langue , setLangue] = useState("");
  const profileData = async () => {
    try {
      
      const res = await axios.get("http://localhost:8080/bricoleurs/"+props.user.id);
      setLangue(res.data.langues);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  });

    const leslangues= (langues)=>{
      let array = []
      for(var i=0;i<langues.length;i++){
        array.push(
          <p>
            {langues[i].langue}
        </p>
        )
      }
      return(
        array
      );
    }
    if(props.user.length!=0 && props.user.id>0)  { return (
      <div className = "user">
        <h2>Langues: </h2>  
        {
           <div>
             {(leslangues(langue).length!=0)?(leslangues(langue)):(<div>vide vide</div>)}
           </div>
         
        }
        
        <br/>
        
        <br/>
      </div>
  )}else{
    return (
      <div> Vide</div>
    );
  }
}

export default Langues
