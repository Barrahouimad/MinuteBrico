import React from 'react'
import Nav from '../../home/nav';
import './ClientMissionCss.css'
import Carte from './carte'
import CarteBrico from './carteBrico'
const DetailsMissions=(props)=>{


    return(
        <div id="detailsMissions">
           <Nav data={props.data}/>
           <div  className="Container mt-3">
                <div className="row justify-content-center">
                    <div style={{background:"#D1653E",textColor:"white",padding:"5px",paddingRight:"25em"}} className="col-md-6 col-xs-10">
                            <h1>Récapitulatif de vos missions</h1>
                    </div>
                    <div style={{background:"#D1653E",marginLeft:"10px",padding:"5px"}} className="ml-3 col-md-2 col-xs-10">
                            <h1>Status de mission</h1>

                    </div>
               </div>
                <div className=" mt-4">
                    <Carte data={( (props.data.length!=0)?  (props.data.missions.filter((x)=>(x.id==document.location.pathname.split("/")[2]))):(props.data)  )}/>
               </div>
               <div style={{marginLeft:"250px"}} className="row justify-content-start mt-3">
                    <div style={{background:"#D1653E",textColor:"white",padding:"5px",marginTop:"20px",marginLeft:"5em",paddingRight:"18em"}} className="col-md-6 col-xs-10">
                            <h1>Liste bricoleurs ayant postulés</h1>
                    </div>
                    
               </div>

               <div className="container">
                   <CarteBrico data={( (props.data.length!=0)?  (props.data.missions.filter((x)=>(x.id==document.location.pathname.split("/")[2]))):(props.data)  )} missionId={document.location.pathname.split("/")[2]}/>
               </div>
           </div>
        </div>);

}

export default DetailsMissions;