import React, { Component } from 'react'
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import Signup from './signup';
import './style.css';

class FormSignup extends Component {
    state = {
        step : 1,
        photo : '',
        firstName  : '',
        lastName : '',
        displayName : '' ,
        email : '',
        password: '',
        phone : '',
        birthDate : '',
        adresse : '',
        city : '',
        Categorie : [],
        Langues :[],
      certifications : [{
            name_certification : '',
            name_centre : '',
            date_obtention : '',
            descriptionProfil :'',
            date_expiration : '',
            certificat_serie: '',
            customFile : ''
        }],
     
       diplomes : [{
            diplome : '',
            school : '',
            annee_entre : '',
            annee_sortie : '',
            diplome_serie : '',
            customFile :''

        }],

        
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({step : step +  1});
    };
    prevStep = () => {
        const {step} = this.state;
        this.setState({step : step - 1});
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value 
           
        });
    
    }
    inputChangecertif = (certif) => {
        this.setState({
            certifications: certif
           
        });
    
    }
    setCategorie=(cat)=>{
        this.setState({ Categorie: cat });
       // alert("from setcategory "+this.state.Categorie);
    };
    setLangue=(cat)=>{
        this.setState({ Langues: cat });
       // alert("from setcategory "+this.state.Categorie);
    };
  
    render() {
        const { step } = this.state;
        const { descriptionProfil,photo, firstName, lastName,displayName, email, password, phone, birthDate,adresse,Categorie,certifications,diplomes,Langues} = this.state;
        const values = { descriptionProfil,photo, firstName, lastName,displayName, email, password, phone, birthDate,adresse,Categorie,certifications,diplomes,Langues};
        

        switch (step){
            case 1:
                return(
                    <Signup
                        nextStep={this.nextStep}
                        inputChange = {this.inputChange}
                        values= {values}
                            />
                );
            case 2:
                return(
                    <Form1
                        nextStep={this.nextStep}
                        prevStep = {this.prevStep}
                        inputChange = {this.inputChange}
                        setLangue={this.setLangue}
                        values= {values}
                            />
                    );
             case 3:
                return(
                    <Form2
                        prevStep = {this.prevStep}
                        nextStep={this.nextStep}
                        inputChange = {this.inputChange}
                        setCategorie={this.setCategorie}
                        values= {values}
                        inputChangecertif={this.inputChangecertif}
                            />
                    );
            case 4:
                return(
                    <Form3
                        prevStep = {this.prevStep}
                        nextStep={this.nextStep}
                        inputChange = {this.inputChange}
                        values= {values}
                            />
                    );
        }
    }
}
export default FormSignup;