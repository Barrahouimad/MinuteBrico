import React from 'react';
import Nav from '../../home/nav';
import './ClientMissionCss.css'
import Carte from './carte'
const ClientMissions = (props) => {
    /** */
    // console.log(props.data.length);
    return (
        <div id="ClientMissions">
            <Nav data={props.data} />
            <div id="containerr" >
                <div className="row justify-content-center">
                    <div className="col-md-6 col-xs-10">
                        <h6>Récapitulatif de vos missions postées: </h6>
                    </div>
                    <div className="ml-3 col-md-2 col-xs-10">
                        <h6>Status:</h6>
                    </div>
                </div>
                <div>
                    <Carte data={(props.data.length != 0) ? (props.data.missions.filter((x) => (x.etat_mission == 0))) : props.data} />
                    <Carte data={(props.data.length != 0) ? (props.data.missions.filter((x) => (x.etat_mission == 1))) : props.data} />
                    <Carte data={(props.data.length != 0) ? (props.data.missions.filter((x) => (x.etat_mission == 2))) : props.data} />
                </div>
            </div>
        </div>
    );
}
export default ClientMissions;