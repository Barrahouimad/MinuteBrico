import React from 'react';
import Nav from '../../home/nav';
import './ClientMissionCss.css'
import Carte from './carte';
const ClientMissions =(props)=>{
    return(
        <div id="ClientMissions">
            <Nav  data={props.data} />
            <div id="container" className="Container">
                <div className="row justify-content-center">
                    <div style={{background:"#D1653E",textColor:"white"}} className="col-md-6 col-xs-10">
                            <h1>Récapitulatif de vos missions</h1>
                    </div>
                    <div style={{background:"#D1653E",marginLeft:"10px"}} className="ml-3 col-md-2 col-xs-10">
                            <h1>Status de mission</h1>

                    </div>
               </div>
                <div>
                    <Carte data={props.data.missions.filter((x)=>(x.etat_mission==0))}/>
                    <Carte data={props.data.missions.filter((x)=>(x.etat_mission==1))}/>
                    <Carte data={props.data.missions.filter((x)=>(x.etat_mission==2))}/>
               </div>
            </div>
       </div>
    );
}
export default ClientMissions;