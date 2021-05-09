import React from 'react'
import Nav from '../../home/nav';
import './ClientMissionCss.css'

const DetailsMissions=(props)=>{


    return(
        <div>
           <Nav data={props.data}/>
        </div>);

}

export default DetailsMissions;