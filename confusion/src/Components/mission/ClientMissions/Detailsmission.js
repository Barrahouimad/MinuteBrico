import React from 'react'
import Nav from '../../home/nav';
import './ClientMissionCss.css'
import Carte from './carte'
import CarteBrico from './carteBrico'
const DetailsMissions = (props) => {


    return (
        <div id="detailsMissions">
            <Nav data={props.data} />
            <div className=" mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-xs-10">
                        <h6>Récapitulatif de vos missions postées: </h6>
                    </div>
                    <div className=" col-md-2 col-xs-10">
                        <h6>Status:</h6>
                    </div>
                </div>
                <div className=" mt-3">
                    <Carte data={((props.data.length != 0) ? (props.data.missions.filter((x) => (x.id == document.location.pathname.split("/")[2]))) : (props.data))} />
                </div>
                <br />
                <div className="row justify-content-center">
                    <div className="col-md-6 col-xs-10">
                        <h6>Les MinuteBricoleurs ayant postulé à votre mission:</h6>
                    </div>
                    <div className=" col-md-2 col-xs-10">
                    </div>
                </div>

                <div className="container">
                    <CarteBrico data={((props.data.length != 0) ? (props.data.missions.filter((x) => (x.id == document.location.pathname.split("/")[2]))) : (props.data))} missionId={document.location.pathname.split("/")[2]} />
                </div>
            </div>
        </div>);

}

export default DetailsMissions;