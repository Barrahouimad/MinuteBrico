import React, { Component } from 'react'
import Editform from './editform';
import Form4 from'./form4'
import './forms.css'

class FormEdit extends Component {

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

        category : [],

        certifications :{
            name_certification : '',
            name_centre : '',
            date_obtention : '',
            date_expiration : '',
            certificat_serie: '',
            customFile : ''
        },
        diplomes :{
            diplome : '',
            school : '',
            annee_entre : '',
            annee_sortie : '',
            diplome_serie : '',
            customFile :''

        },
        langues :{
            name_language : '',

        }
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
        })
    };

    render() {
        const { step } = this.state;
        const { photo, firstName, lastName,displayName, email, password, phone, birthDate,adresse,category,certifications,diplomes,langues} = this.state;
        const values = { photo, firstName, lastName,displayName, email, password, phone, birthDate,adresse,category,certifications,diplomes,langues};
        
        

        switch (step){
            case 1:
                return(
                    <Editform
                    nextStep={this.nextStep}
                    prevStep = {this.prevStep}
                    inputChange = {this.inputChange}
                    values= {values}
                    user={this.props.user}
                    />
                );
            case 2: 
                return (
                    <Form4
                    prevStep = {this.prevStep}
                    nextStep={this.nextStep}
                    inputChange = {this.inputChange}
                    values= {values}
                    user={this.props.user}
                        />
                );
                
        }
    }
}
export default FormEdit;