import React,{useState} from 'react'
import Axios from "axios"
const CarteBrico =(props)=>{
      const [brico,setBrico]=useState([]);
    Axios.get( "http://localhost:8080/Bricoofmissions/"+props.missionId)

    .then(res=>{
         setBrico(res.data);
     })  
     .catch(err =>{
       console.log("still have error ",err);
     })
    
const carte=brico.map((brico)=>{
  return(
     <div key={brico.id} className="card mt-3 d-flex flex-row " style={{width:"65em",marginLeft:"8em"}} >
         <div style={{width:"80%"}} className=" row justify-content-between">
             <div className="col-md-3  p-3">
                <img src="/assets/logo.png" style={{height:"110px",width:"70px"}}/>
             </div>
             <div className="col-md-auto  p-3">
                 {brico.firstName+" "+brico.lastName}
             </div>
             <div className="col-md-3 p-3">
                 <h3>Disponibilité </h3>
                
             </div>
         </div>
         <div className="d-flex flex-column align-items-around p-3">
              <button className="btn btn-outline-success">Accepter</button>
              <button className="btn btn-outline-danger">Refuser</button>

         </div>

    </div>)
});

    return(
        <div>
        {carte}
        </div>);
}
export default CarteBrico;