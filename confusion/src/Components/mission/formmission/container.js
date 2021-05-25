import React from 'react'
import './form.css';
import FormMission from './FormMission';
const Container=(props)=>{


    return(<div id="FormMission">
 <FormMission user={props.user}/>
    </div>);
}
export default Container;