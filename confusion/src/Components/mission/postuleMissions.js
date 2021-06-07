import React ,{useEffect, useState} from 'react';
import useSWR from 'swr'
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
            <div>
              <CardItem  key={i.id}
                  src={item.images}
                  text={item.mission_description}
                  label={item.titre_mission}
                  path='/comment'
                />
            
              <div style={{color:"green",fontSize:"2em"}} ><p>Vous l'avais accepté</p></div>
          </div>
                
            
            
            
            ); 
          }
  
          else if( i.clientAccept==1 && i.bricoAccept==0 ){

            console.log({estAccept:2})
            setEstaccepe(2) ;
            return (
              <div>
                <CardItem    key={i.id}
                  src={item.images}
                  text={item.mission_description}
                  label={item.titre_mission}
                  path='/comment'
                      />
                 <div className="d-flex flex-row-center align-items-around p-3">
                <button onClick={()=>handelAccept(item.id)} className="btn btn-outline-success">Accepter</button>
                <button className="btn btn-outline-danger">Refuser</button>
                </div>
              </div>
            );
          }
          else{
        
              console.log({estAccept:0})
                return(
                          <div>
                          <CardItem  key={i.id}
                              src={item.images}
                              text={item.mission_description}
                              label={item.titre_mission}
                              path='/comment'
                              />
                        <div style={{color:"red",fontSize:"2em"}} >Pas de réponse</div>
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
            <div className="container-fluid" style={{width:"40%"}}>
            {Donnee}
            </div>
             
           </div>
                   
    </div>
               );
}

export default PostuleMission;