import React, { Component } from 'react'
import InputComp from "../inputComp"
import {Link} from "react-router-dom"
import Axios from 'axios'
import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2'
const url ="http://localhost:3000";

class Signup extends Component {
    state = {
        typeClient:null,
        showErr : false,
        showSuc:false,
        showErrbrico:false
      }
      generateString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         let result = ' ';
         const charactersLength = characters.length;
         for ( let i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
         }
     
         return result;
         /*
         const href="http://localhost:3000/bricosignup/"+token;
           token:token,
                 role:"Bricoleur"*/
     }
      save(props,type){
        var pass1 = document.getElementById("pass1")
        var pass2 = document.getElementById("pass2")
        var email = document.getElementById("IdEmail")
        var password = document.getElementById("pass1")
        var firstName = document.getElementById("firstName")
        var lastName = document.getElementById("lastName")
        const token=this.generateString(10);
        var pass12 = document.getElementById("pass1").value.length;
        var pass22 = document.getElementById("pass2").value.length;
        if(pass1.value==pass2.value  && pass12!==0 && pass22!==0 ){
    
          Axios.post("http://localhost:8080/Client",{
            firstName :firstName.value,
            lastName : lastName.value,
            email : email.value,
            password : password.value,
            token:token,
            role:"Client"   //"iliass@gmail.com"
       })
          .then(res=>{
            if (res.data=="existe"){
              Swal.fire({
                title: 'Oops...',                
                text: 'email existe déjà',
                icon: 'error',
                button: 'Ok'
                
              })
            }else{
              if(this.state.typeClient==2){
                this.continue();
            }else{
                Swal.fire({
                    title: 'Merci',                
                    text: 'Votre compte à été créé avec succès',
                    icon: 'success',
                    button: 'Ok'
                    
                  }).then( okay => {
                      if (okay){
                        document.location.href="http://localhost:3000/login"
                      }
                  })
            }
            }
            
          })
          .catch(err =>{
            this.setState({
              showErr:true
            })
          })
    
        }else{
          pass1.style.border="1px solid red"
          pass2.style.border="1px solid red"
        }
        return true;
      }
      onSubmit=(e,type)=>{
        e.preventDefault()
        this.save()
        this.setState({
           typeClient:type 
        })
        
    }


      continue = () => {
        //preventDefault();

        const IdEmail =document.getElementById("IdEmail").value.length;
        const firstName =document.getElementById("firstName").value.length;
        const lastName =document.getElementById("lastName").value.length;
        const pass1 = document.getElementById("pass1").value.length;
        const pass2 = document.getElementById("pass2").value.length; 
        if(IdEmail !=0 &&  firstName !=0 && pass1 !=0 && pass2 !=0 && lastName!=0 ){
            this.props.nextStep();
        }
        else{
            this.setState({ showErrbrico: true })
            
        }
     };

     

    render() {
       const { values, inputChange } = this.props;
        return (
            <div className="_Signup">
                <div className="SignUpPage">

                    <SweetAlert
                        show={this.state.showErrbrico}
                        title="Error"
                        text="Merci de vérifier tous les champs nécessairs avant de continuer!"
                        onConfirm={() => this.setState({ showErrbrico: false })}
                    />
                    <SweetAlert
                        show={this.state.showErr}
                        title="Error"
                        text="cet email est deja existé!"
                        onConfirm={() => this.setState({ showErr: false })}
                    />
                    <SweetAlert
                        show={this.state.showSuc}
                        title="Success"
                        icon='warning'
                        text="Merci de verifier votre boite email!"
                        onConfirm={() => {
                            this.setState({ showSuc: false })
                            document.location.href=url
                        }}
                   />

                   

                    <Link to="/"> <img alt="..." src="/assets/logo.png" className="logo" /></Link>
                    <p className="title">Rejoindre MinuteBrico</p>

                    <form >
                        <div className="form-outline mb-4 md-5">
                            <label className="form-label" htmlFor="form5Example1">Adresse e-mail <span style={{color:'red'}}>*</span> </label>
                            <input placeHolder="Adresse e-mail" type="email" className="form-control" id="IdEmail" name="email" onChange={inputChange('email')} value={values.email} required />
                        </div>

                        <div className="form-outline mb-4 md-5">
                            <label className="form-label" htmlFor="form5Example1">Prénom <span style={{color:'red'}}>*</span> </label>
                            <input  placeHolder="Prénom"  className="form-control" id="firstName" name="firstName" onChange={inputChange('firstName')} value={values.firstName} required />
                        </div>

                        <div className="form-outline mb-4 md-5">
                            <label className="form-label" htmlFor="form5Example1">Nom <span style={{color:'red',}}>*</span> </label>
                            <input  placeHolder="Nom" className="form-control" id="lastName" name="lastName" onChange={inputChange('lastName')} value={values.lastName} required />
                        </div>


                        <div className="form-outline mb-4 md-5">
                            <label className="form-label" htmlFor="form5Example1">Mot de passe <span style={{color:'red'}}>*</span> </label>
                            <input placeHolder="Mot de passe" type="password" className="form-control" id="pass1" name="password1" onChange={inputChange('password')} value={values.password} required />
                        </div>
                        <div className="form-outline mb-4 md-5">
                            <label className="form-label" htmlFor="form5Example1">Confimer le mot de passe <span style={{color:'red'}}>*</span> </label>
                            <input placeHolder="Confimer le mot de passe" type="password" className="form-control" id="pass2" name="password2"  required />
                        </div>


                      
                        <input onClick={(e)=>{
                           this.onSubmit(e,1)                      
                        }} type="submit" className="Submit" value="S'inscrire" />
                        <input onClick={(e)=>{
                           this.onSubmit(e,2)                      
                        }} type="submit" className="Submit" value="Continuer en tant que Bricoleur" />
                       
                       
                    </form>
                    <div className="Or">
                        <div className="bar"></div>
                        <p className="content">or</p>
                        <div className="bar"></div>
                    </div>
                    <div className="DejaSeconnact">Déja sur MinuteBrico? <Link to="/login" className="btnConnect">Se Connecter</Link></div>
                </div>
                
                <img alt="..." src="/assets/12.jpeg" className="bg" />
            </div>
        )
    }
}
export default Signup ;
