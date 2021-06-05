import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom"
import axios from 'axios'


function Localisation() {

  return (
      <div className = "user">
        <br/>

          {/*fetch data from backend and feed with get and axios*/}
        <h1> <i class="fa fa-map-marker" aria-hidden="true"></i> Ville, Maroc </h1>
        <br/>
        //eslint-disable-next-line 
        <br/>
        <Link>Vers la carte</Link>
      </div>
  )
}

export default Localisation
