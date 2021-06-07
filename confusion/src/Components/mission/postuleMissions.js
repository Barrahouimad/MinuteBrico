import React ,{useEffect, useState} from 'react';
import useSWR from 'swr'
import Carte from './ClientMissions/carte'
import Axios from "axios"
import Nav from '../home/nav';
import './mission.css';
import '../home/Cards.css';
 import CardItem from '../home/CardItem';
 import SweetAlert from 'sweetalert2-react';

const PostuleMission=(props)=>{
  const [show,setShow]=useState(false);
  const[ Array,setArray]=([]);
  const [Donnee,setDonnee]=useState(<div  style={{color:"black",fontSize:"13em"}} >empty</div>);
  const [acceper,setEstaccepe]=useState(0);
  const [Div,setDiv]=useState(<div  style={{color:"black",fontSize:"13em"}} > div</div>)
  const handelAccept =(mission)=>{
    //alert("http://localhost:8080/BricoAccept/"+props.user.id+"/"+mission+"/1")
    Axios.put("http://localhost:8080/BricoAccept/"+props.user.id+"/"+mission+"/1")
 
      .then(res=>{
        setShow(true)
      })
      .catch(err =>{
       alert(err)
          })
  }  

useEffect(()=>{
 
  Axios.get('http://localhost:8080/bricoleurs/'+props.user.id)
  .then(res=>{
    console.log({darais:res.data})
    setDonnee(res.data.missions.map( (item) =>{

       return item.accepterBrico.map(i=>{

        if(i.bricoId==props.user.id){
          
         
          if(i.clientAccept==1 && i.bricoAccept==1 ){
          //  setEstaccepe(1) ;
            console.log({estAccept:1})
       
  
           return (
            <div  >
            
            <div key={item.id} style={{}} className="mt-3 row justify-content-center">
          <div style={{ height: "200px", borderRadius: "5px" ,width:"60em"}} className="col-md-6 col-xs-10">
            <div className="card">
              <h3 style={{ position: "absolute", left: "9px" }} > {item.titre_mission}</h3>
              <div className="mt-4 card-body">
                <div className=" d-flex flex-column">
                  <p style={{ float: "left" }} className="col-12 card-text">{item.mission_description}</p>
                  <div className="d-flex flex-row">
                    {item.categories.map((x) => {
                      return (
                        <p key={x.id} style={{ color: "#D1653E" }} className="col-2 " >{x.nom} </p>
                      );
                    })}
                  </div>
                </div>
                {(!window.location.href.includes("carddetails") || item.etat_mission == 2) ?
                  <a style={{ float: "right" }} href={"carddetails/" + item.id} className="mt-4 btn btn-success">Voir détails</a> : <p></p>}
              </div>
            </div>
          </div>
          <div style={{ height: "200px",width:"30em", marginLeft: "10px", paddingTop: "70px", background: "#ffff", borderRadius: "5px" }} className="pl-3 col-md-2 col-xs-10 ">
          <div style={{color:"green",fontSize:"2em"}} ><p>Vous l'avais accepté</p></div>
          </div>
        </div>



           
            
           
          </div>
                
            
            
            
            ); 
          }
  
          else if( i.clientAccept==1 && i.bricoAccept==0 ){

            console.log({estAccept:2})
            setEstaccepe(2) ;
            return (
              <div>


          <div key={item.id} style={{}} className="mt-3 row justify-content-center">
                    <div style={{ height: "200px", borderRadius: "5px" ,width:"60em"}} className="col-md-6 col-xs-10">
                      <div className="card">
                        <h3 style={{ position: "absolute", left: "9px" }} > {item.titre_mission}</h3>
                        <div className="mt-4 card-body">
                          <div className=" d-flex flex-column">
                            <p style={{ float: "left" }} className="col-12 card-text">{item.mission_description}</p>
                            <div className="d-flex flex-row">
                              {item.categories.map((x) => {
                                return (
                                  <p key={x.id} style={{ color: "#D1653E" }} className="col-2 " >{x.nom} </p>
                                );
                              })}
                            </div>
                          </div>
                          {(!window.location.href.includes("carddetails") || item.etat_mission == 2) ?
                            <a style={{ float: "right" }} href={"carddetails/" + item.id} className="mt-4 btn btn-success">Voir détails</a> : <p></p>}
                        </div>
                      </div>
                    </div>
                    <div style={{ height: "200px",width:"30em", marginLeft: "10px", paddingTop: "70px", background: "#ffff", borderRadius: "5px" }} className="pl-3 col-md-2 col-xs-10 ">
                    <div className="d-flex flex-row-center align-items-around p-3">
                      <button onClick={()=>handelAccept(item.id)} className="btn btn-outline-success">Accepter</button>
                      <button className="btn btn-outline-danger">Refuser</button>
                      </div>
                      </div>
                  </div>


              </div>
            );
          }
          else{
        
              console.log({estAccept:0})
                return(
                          <div>

                 
          <div key={item.id} style={{}} className="mt-3 row justify-content-center">
                    <div style={{ height: "200px", borderRadius: "5px" ,width:"60em"}} className="col-md-6 col-xs-10">
                      <div className="card">
                        <h3 style={{ position: "absolute", left: "9px" }} > {item.titre_mission}</h3>
                        <div className="mt-4 card-body">
                          <div className=" d-flex flex-column">
                            <p style={{ float: "left" }} className="col-12 card-text">{item.mission_description}</p>
                            <div className="d-flex flex-row">
                              {item.categories.map((x) => {
                                return (
                                  <p key={x.id} style={{ color: "#D1653E" }} className="col-2 " >{x.nom} </p>
                                );
                              })}
                            </div>
                          </div>
                          {(!window.location.href.includes("carddetails") || item.etat_mission == 2) ?
                            <a style={{ float: "right" }} href={"carddetails/" + item.id} className="mt-4 btn btn-success">Voir détails</a> : <p></p>}
                        </div>
                      </div>
                    </div>
                    <div style={{ height: "200px",width:"30em", marginLeft: "10px", paddingTop: "70px", background: "#ffff", borderRadius: "5px" }} className="pl-3 col-md-2 col-xs-10 ">
                    <div style={{color:"red",fontSize:"2em"}} >Pas de réponse</div>
                      </div>
                  </div>
                        </div>


                        );
      
         
          }
  
         } else{
           return(
             <div   style={{color:"black",fontSize:"13em"}}>
               vide
             </div>
           );
         }


      })

     
     
    })
  )

  })
  .catch(err => console.error(err))

},[])

console.log({Donne:Donnee})
    return(
    <div >
      <div id="postulemission"></div>
        <Nav data={props.user} />
           <div id="postulebox">
           <h1>MinuteBlog</h1>
           <SweetAlert
              show={show}
              title="Success"
              icon='warning'
              text="Congratulations vous avez bien obtenu la mission"
              onConfirm={() => {
                setShow(false)
              }}
            />
            <div className="container-fluid" style={{width:"40%",paddingTop:"7em"}}>
            {Donnee}
            </div>
             
           </div>
                   
    </div>
               );
}

export default PostuleMission;