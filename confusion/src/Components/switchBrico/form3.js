import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2'
//const url = "http://localhost:3000/profile_brico";
const url = "http://localhost:3000/home";

class Form3 extends Component {
    generateString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         let result = ' ';
         const charactersLength = characters.length;
         for ( let i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
         }
     
         return result;
        
     }
    state = {
        showErr : false,
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    CreatBrico = e => {
        const { 
            values: { email,password,phone,firstName,lastName,birthDate,city,adresse,photo,Categorie,certifications,Langues} 
        } = this.props;

        e.preventDefault();
        const diplome = document.getElementById("diplome").value;
        const school =document.getElementById("school").value;
        const annee_entre = document.getElementById("annee_entre").value;
        const annee_sortie = document.getElementById("annee_sortie").value;
        const descriptionProfil = document.getElementById("descriptionProfil").value;
        
        
        const token=this.generateString(10);

        const diplomes=[{
            diplome:diplome,
            school:school,
            annee_entre:annee_entre,
            annee_sortie:annee_sortie,
            
           
        }]

        const diplome1 = document.getElementById("diplome").value.length;
        const schoo1l =document.getElementById("school").value.length;
        const annee_entre1 = document.getElementById("annee_entre").value.length;
        const annee_sortie1 = document.getElementById("annee_sortie").value.length;
        const descriptionProfil1 = document.getElementById("annee_sortie").value.length;

        if(diplome1!==0 && schoo1l!==0  && annee_entre1!==0  && annee_sortie1!==0 && descriptionProfil1!==0 ){
           //alert(certifications[0].name_certification);
           const href="http://localhost:8080/bricoleurscertif";
           axios.post(href,
            {
                email : email,
                password : password ,
                firstName:firstName,
                lastName:lastName,
                descriptionProfil:descriptionProfil,
                ville : city ,
                birthday:birthDate,
                adresse:adresse,           
                phone :phone,
                categorie:Categorie,
                certification:certifications,
                diplomes:diplomes,
                role:"Bricoleur",
                token:token,
                langues:Langues
            })
            .then(res=>{
                Swal.fire({
                    title: 'Merci',                
                    text: 'Votre compte Bricoleur à été créé avec succès',
                    icon: 'success',
                    button: 'Ok'
                    
                  }).then( okay => {
                      if (okay){
                        document.location.href=url
                      }
                  })
            })
            
        }
        else{
            Swal.fire({
                title: 'Oops...',                
                text: 'Merci de vérifier tous les champs nécessairs',
                icon: 'error',
                button: 'Ok'
                
              })
        }


    }    


    render() {
     

        return (
            <div className="form-container mt-5 mb-5 " style={{width:"50%"}}>
                    <SweetAlert
                        show={this.state.showErr}
                        title="Error"
                        text="Merci de vérifier tous les champs nécessairs"
                        onConfirm={() => this.setState({ showErr: false })}
                    />
                    <div style={{marginLeft:"50px", marginRight:"50px"}}>
                        <form>
                           <Link to="/"> <img alt="..." src="/assets/logo.png" id="logo" /></Link>
                            <h1 className="Certificat mb-3 mt-5 ml-4 mr-4" style={{color:"#D1653E",fontSize:"20px"}}>Diplôme</h1>
                            <div className=" mb-4 md-5 mt-4" >
                                <label style={{float:"left"}}  className="form-label" htmlFor="form5Example1">Nom du diplôme<span style={{color:'red'}}>*</span> </label>
                                <input type="text"  className="form-control" id="diplome" name="diplome1" required />
                            </div>
                            <div className=" mb-4 md-5 mt-4" >
                                <label style={{float:"left"}}  className="form-label" htmlFor="form5Example1">Nom de l'école ou centre<span style={{color:'red'}}>*</span> </label>
                                <input type="text"  className="form-control" id="school" name="school1" required />
                            </div>
                            <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                                <label   className="form-label" htmlFor="form5Example1">Date d'entrée<span style={{color:'red'}}>*</span></label>
                                <input type="date" className="form-control" id="annee_entre" name="annee_entre1"  required  />
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                                <label className="form-label" htmlFor="form5Example1">Date de sortie<span style={{color:'red'}}>*</span></label>
                                <input type="date" className="form-control" id="annee_sortie" name="annee_sortie1"  required  />
                            </div>
                            
                            <div className=" mb-4 md-5 mt-4" >
                                <label style={{float:"left"}}  className="form-label" htmlFor="form5Example1">description de votre Profile<span style={{color:'red'}}>*</span> </label>
                                <input type="text"  className="form-control" id="descriptionProfil" name="descriptionProfil1" required />
                            </div>
                           
                            <button onClick={this.back}  style={{float:'left'}}    className="btn btn-primary btn-block mb-4">Retour</button>
                            <button onClick={this.CreatBrico}  style={{float:'right'}} type="submit" className="btn btn-primary btn-block mb-4">Enregistrer</button>

                        </form>             

                    </div>
               </div>
        )
    }
}
export default  Form3; 