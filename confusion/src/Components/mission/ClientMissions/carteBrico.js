import React, { useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom"
import SweetAlert from 'sweetalert2-react';
const CarteBrico = (props) => {
  const [brico, setBrico] = useState([]);
  const [show, setShow] = useState(false);

  const handelTerminer =(mission)=>{
  //alert("http://localhost:8080/etatmission/"+mission)
    Axios.put("http://localhost:8080/etatmission/"+mission)
 
      .then(res=>{
        setShow(true)
      })
      .catch(err =>{
       alert(err)
          })
  } 


  const handelAccept = (brico) => {
    // alert("http://localhost:8080/ClientAccept/"+brico+"/"+props.missionId+"/1")
    Axios.put("http://localhost:8080/ClientAccept/" + brico + "/" + props.missionId + "/1")

      .then(res => {
        setShow(true)
      })
      .catch(err => {
        alert(err)
      })
  }
  React.useEffect(() => {
    Axios.get("http://localhost:8080/Bricoofmissions/" + props.missionId)

      .then(res => {
        setBrico(res.data);

      })
      .catch(err => {
        console.log("still have error ", err);
      })
  }, [])


  const carte = brico.map((brico) => {
    return (
      <div key={brico.id} className="card mt-3 d-flex flex-row " style={{ width: "65em", marginLeft: "8em" }} >
        <div style={{ width: "80%" }} className=" row justify-content-between">
          <div className="col-md-3  p-3">
            <img src="/assets/logo.png" style={{ height: "110px", width: "70px" }} />
          </div>
          <div className="col-md-auto  p-3">
            <a className="navlink" href={"http://localhost:3000/profile/" + brico.id}> <p style={{ color: "black" }} > {brico.firstName + " " + brico.lastName}</p></a>
          </div>
          <div className="col-md-3 p-3">
            <h3>Disponibilité </h3>
          </div>
        </div>
        <div className="d-flex flex-column align-items-around p-3">
          <button onClick={() => handelAccept(brico.id)} className="btn btn-outline-success">Accepter</button>
          <button className="btn btn-outline-danger">Refuser</button>

        </div>
        <SweetAlert
          show={show}
          title="Success"
          icon='warning'
          text="On vous remercie, prière d'attendre la réponse de votre Bricoleur."
          onConfirm={() => {
            setShow(false)
          }}
        />
      </div>)
  });

  return (
    <div>
      {(props.data.length != 0) ? ((props.data[0].etat_mission == 0) ? <div>
        {carte}
      </div> :
        ((props.data[0].etat_mission == 1)?<div style={{ color: "gray" ,marginLeft:"9em"}} className="d-flex flex-col justify-content_center">
          <p style={{ color: "gray", fontSize: "2em" }} >Un bricoleur est choisi</p>
          <button style={{ marginBottom:"1em", marginLeft:"2em"}} className="btn btn-outline-success" onClick={()=>handelTerminer(props.data[0].id)}>Mission terminé ?</button>  </div>:<div>
          <p style={{ color: "gray", marginRight: "20em", marginTop: "1em", fontSize: "2em" }} >Mission Terminé</p>
            </div>)) : <div></div>}
    </div>
  );
}
export default CarteBrico;