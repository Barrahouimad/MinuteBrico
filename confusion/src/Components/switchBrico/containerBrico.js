import React from 'react'
import './forms.css';
import FormSwitchBrico from './formSwitchBrico'

function ContainerBrico(props) {
    return (
        <div id="FormSwitchBrico">
            <FormSwitchBrico user={props.user}/>
        </div>
    )
}
export default ContainerBrico;
