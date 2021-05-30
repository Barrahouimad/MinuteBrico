import React from 'react'
import dataFormations from '../datas/Formations'
import dataDomaines from '../datas/Domaines'

import Formations from './Formations'
import Domaines from './Domaines'

function FormationDomaines(props) {
    return (
        <>
          <Formations user={props.user}/> 
          <Domaines user={props.user}/> 
        </>
    )
}

export default FormationDomaines
