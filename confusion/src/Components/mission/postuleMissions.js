import React from 'react';
import useSWR from 'swr'
import Axios from "axios"
import Nav from '../home/nav';
import './mission.css';
import '../home/Cards.css';
 import CardItem from '../home/CardItem';
const PostuleMission=(props)=>{
  const handelAccept =(mission)=>{
    alert("http://localhost:8080/BricoAccept/"+props.user.id+"/"+mission+"/1")
    Axios.put("http://localhost:8080/BricoAccept/"+props.user.id+"/"+mission+"/1")
 
      .then(res=>{
         
      })
      .catch(err =>{
       alert(err)
          })
  }  

const fetcher = (url) => fetch(url).then(res =>{return res.json()} )
const { data, error } = useSWR('http://localhost:8080/bricoleurs/'+props.user.id, fetcher)
   if (error) return (
           <div className="d-flex flex-column">
             <img alt="..." src="/assets/logo.png" style={{height:"100px",width:"100px"}} className="logo" />

               <p className="text-danger">failed to load</p>

           </div>);
   if (!data) {return (
     <div>
       <img alt="..." src="/assets/logo.png" className="logo" />
       <div className="d-flex flex-row" style={{position:"absolute",left:"50%",right:"50%",top:"45%" }}>      
          <div className="spinner-grow text-primary" role="status">
           <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-secondary" role="status">
           <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-success" role="status">
           <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-danger" role="status">
           <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-warning" role="status">
           <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-info" role="status">
           <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-light" role="status">
           <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-dark" role="status">
           <span className="visually-hidden">Loading...</span>
           </div>  
 </div>
 </div>);}


//les cartes  

const Missions= data.missions.map((item)=>{
    console.log("hello"+ item.id);

    const id=item.id;
       return(
        <div className='cards'>
        <div className='cards__container'>
     
           
              <CardItem
                key={item.id}
                src={item.images}
                text={item.mission_description}
                label={item.titre_mission}
                path='/comment'
              />
              
              <div className="d-flex flex-row align-items-around p-3">
                  <button onClick={()=>handelAccept(item.id)} className="btn btn-outline-success">Accepter</button>
                  <button className="btn btn-outline-danger">Refuser</button>
              </div>
      </div>
    </div>
       )
    });

    return(
    <div >
      <div id="postulemission"></div>
        <Nav data={props.user} />
           <div id="postulebox">
           <h1>MinuteBlog</h1>
             {Missions}
           </div>
                   
    </div>
               );
}

export default PostuleMission;