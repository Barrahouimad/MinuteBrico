import React, { Component } from 'react'
import axios from "axios";

export class Success extends Component {
    async componentDidMount() {
        let { values } = this.props;
          values={...values}
      //  alert("in success "+this.props.user.id+"     donne mission "+values.category.value);
    // alert( "categorie:"+[values.category.value]+"    titre_mission: et id " +values.title+this.props.user.id+"    state: 0  adresse:"+values.address+ " etat_mission: 0 images: null ville:"+values.ville+"      interval_temp: 480000    mission_description:"+ values.description+ " date:"+values.date+"     zip_code: "+values.zipcode )
  
     
         //  const response=await axios.post("http://localhost:8080/missions/"+this.props.user.id,values);
        axios.post("http://localhost:8080/missions/"+this.props.user.id,{
         
            categorie:[values.category.value],
            titre_mission: values.title,
            state: "Urgent",
            adresse:values.address ,
            etat_mission: 0,
            images: null,
            ville:values.ville ,
            interval_temps: 480000,
            mission_description: values.description ,
           // date:values.date ,
           zip_code: values.zipcode 
           })
              .then(res=>{
                 //alert(res.data)
              })
              .catch(err =>{
               alert(err)
              })
    }

    render() {
        return (
            <div>
                <h1 className="text-black">Votre mission est postée!</h1>
                <h3>Cliquez pour revenir à la page d'acceuil.</h3>
                  <button className="btn btn-outline-success" onClick={()=>(document.location.href="http://localhost:3000/home")}>Ok</button>
            </div>
        )
    }
}

export default Success
