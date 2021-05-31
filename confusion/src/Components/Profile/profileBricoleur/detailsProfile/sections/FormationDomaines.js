import React from 'react'
import dataFormations from '../datas/Formations'
import dataDomaines from '../datas/Domaines'

import Formations from './Formations'
import Domaines from './Domaines'

function FormationDomaines(props) {
  if(props.user.length!=0)  { 
    return (
        <>
          <Formations user={props.user}/> 
          <Domaines user={props.user}/> 
        </>
    )}
    else{
      <div>
        
      </div>
    }
}

export default FormationDomaines
