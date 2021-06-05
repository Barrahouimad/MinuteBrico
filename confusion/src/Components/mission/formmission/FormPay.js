import React, { Component } from 'react';
import Axios from 'axios'
import Select from 'react-select'
import {Link} from 'react-router-dom';



export class FormPay extends Component {

    continue = (input) => {
        const data={ categorie:[input.category],
            titre_mission: input.title,
            state: "urgent",
            adresse:input.address ,
            etat_mission: 0,
            images: "null",
            ville:input.ville ,
            interval_temp: 15,
            mission_description: input.description ,
            date:input.date ,
            zip_code: input.zipcode } 
           // alert(" table "+input)
   /*  Axios.post("http://localhost:8080/missions/"+this.props.user.id,{
         
              categorie:[input.category],
                titre_mission: input.title,
                state: "urgent",
                adresse:input.address ,
                etat_mission: 0,
                images: "null",
                ville:input.ville ,
                interval_temp: 15,
                mission_description: input.description ,
                date:input.ville ,
                zip_code: input.zipcode 
           })
              .then(res=>{
                
             
              })
              .catch(err =>{
               alert(err)
              })*/
        this.props.nextStep(input);
    };

    back = e => {
        this.props.prevStep();
    };

    onChange = ee => {
        this.setState({ value: ee.target });
    }


    render() {
        const { values, inputChange } = this.props;



        return (
            
            <div className="form-container">
                                <Link to="/home" ><img style={{width:"125px",height:"103px",marginBottom:"10px"}} alt="..." src="/assets/logo.png" className="logo" /></Link>

             
                <br />


                <div className="birthDate mb-4">
                    <label className="form-label" htmlFor="form5Example1">Une estimation de la date de votre mission: <span style={{ color: 'red' }}>*</span></label>
                    <input type="date" className="form-control" id="birthDate" name="birthDate1" onChange={inputChange('date')} value={values.date} required />
                </div>

<br/>
                <div className="row">
                    <div className="col-6">
                        <div className="text-center">
                            <button className="btn btn-secondary" onClick={this.back}>Page précédente</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={() => this.continue(values)}>Page Suivante</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FormPay
