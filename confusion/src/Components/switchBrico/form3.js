import axios from 'axios';
import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2'

const url = "http://localhost:3000/home";
//const url = "/";

class Form3 extends Component {
    
    state = {
        showErr : false,
    }
    generateString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         let result = ' ';
         const charactersLength = characters.length;
         for ( let i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
         }
     
         return result;
         /*const token=this.generateString(10);
         const href="http://localhost:3000/bricosignup/"+token;
           token:token,
                 role:"Bricoleur"*/
     }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    CreatBrico = e => {
        const { 
            values: { firstName,lastName,displayName,birthDate,city,adresse,photo,category,langues,certifications,phone} 
        } = this.props;

        e.preventDefault();
        const description = document.getElementById("descriptionProfil").value;

        const diplome = document.getElementById("diplome").value;
        const school =document.getElementById("school").value;
        const annee_entre = document.getElementById("annee_entre").value;
        const annee_sortie = document.getElementById("annee_sortie").value;
        const diplome_serie = document.getElementById("diplome_serie").value;
        const customFile = document.getElementById("customFile").value;
        const diplomes=[{
            diplome:diplome,
            school:school,
            annee_entre:annee_entre,
            annee_sortie:annee_sortie,
            diplome_serie:diplome_serie,
            customFile:customFile   
        }]
    const descriptionProfil = document.getElementById("descriptionProfil") ;
   // alert(descriptionProfil)

    if( description.length !==0 && diplome.Length!== 0 && school.Length!==0  && annee_entre.Length!==0  && annee_sortie.Length!==0  && diplome_serie.Length!==0 && customFile.Length!==0   ){
           //alert(certifications[0].name_certification);
           console.log({elements:{ email:this.props.user.email,
            password:this.props.user.password,
            firstName:firstName,
            lastName:lastName,
          //  ville : city ,
            //birthday:birthDate,
            adresse:adresse,
          //  phone : phone,
            role:"Bricoleur",
            token:this.generateString(10),
            descriptionProfil : descriptionProfil.value,
            certification:certifications,
            categorie:category,
            langues:langues,
            diplomes:diplomes}})
           axios.post("http://localhost:8080/bricoleurscertif",
            {
                    email:this.props.user.email,
                    password:this.props.user.password,
                    firstName:firstName,
                    lastName:lastName,
                  //  ville : city ,
                    //birthday:birthDate,
                    adresse:adresse,
                    langues:langues,
                  //  phone : phone,
                    role:"Bricoleur",
                    token:this.generateString(10),
                    descriptionProfil : descriptionProfil.value,
                    certifications:certifications,
                    categorie:category,
                  
                    diplomes:diplomes
                

                

            }).then(Swal.fire({
                title: 'Merci',                
                text: 'Votre Profile Bricoleur a été bien Créé',
                icon: 'success',
                button: 'Ok'
                
              }).then( okay => {
                if (okay){
                  document.location.href=url
                }
            }))       .catch(err =>{
              
                  alert(err+"  " +descriptionProfil.value+ "  token"+this.generateString(10)+"  " +adresse/*+"  " +city+"  "/* +birthDate+"  " */+lastName+"  " +certifications[0].name_certification+"  " +diplomes[0].school+"  " /*+langues[0].langues*/);
                })

        }
        else{
            this.setState({ showErr: true })
          //alert(certifications.name_certification);
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
                        <h1 className="Certificat mb-3 mt-5 ml-4 mr-4" style={{color:"#D1653E",fontSize:"20px"}}>Diplôme</h1>
                        <div className=" mb-4 md-5 mt-4" >
                            <label style={{float:"left"}} className="form-label" htmlFor="form5Example1">Nom du diplôme<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="diplome" name="diplome1" required />
                        </div>
                        <div className=" mb-4 md-5 mt-4" >
                            <label style={{float:"left"}} className="form-label" htmlFor="form5Example1">Nom de l'école ou centre<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="school" name="school1" required />
                        </div>
                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label  className="form-label" htmlFor="form5Example1">Date d'entrée<span style={{color:'red'}}>*</span></label>
                            <input type="date" className="form-control" id="annee_entre" name="annee_entre1"  required  />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="birthDate mb-4" style={{justifyContent:"space-between",display:"inline-block"}} >
                            <label sclassName="form-label" htmlFor="form5Example1">Date de sortie<span style={{color:'red'}}>*</span></label>
                            <input type="date" className="form-control" id="annee_sortie" name="annee_sortie1"  required  />
                        </div>
                        <div className=" mb-4 md-5 mt-4" >
                            <label style={{float:"left"}} className="form-label" htmlFor="form5Example1">Numéro de série ou ID<span style={{color:'red'}}>*</span> </label>
                            <input type="text"  className="form-control" id="diplome_serie" name="diplome_serie1" required />
                        </div>

                        <div className="form-outline mb-4 mt-5">
                            <label style={{float:"left"}} class="form-label" for="customFile">Scan du diplôme<span style={{color:'red'}}>*</span></label>
                            <input type="file" class="form-control" id="customFile" />
                            <p style={{fontSize:"12px"}}  >Veuillez importer un scan de votre diplôme<br/><span style={{color:'red'}}>Formats supportés: jpeg, jpg, png moins de 2Mo</span></p>
                        </div>
                     


                       <div className="form-outline mb-4 mt-5">
                            <label style={{float:"left"}} className="form-label" for="descriptionProfil"> Description Pour ton Profile<span style={{color:'red'}}>*</span></label>
                            <textarea  
                                    
                                    className="text textarea"
                                    id="descriptionProfil"                                
                                    type="textarea"
                                    name="descriptionProfil"
                                    
                                    rows="4" cols="60" 
                                    placeholder="  Merci de donner Une Petite Description pour ton Profile :
                                                                                                        - vos points forts ?
                                                                                                        - vos Services ?
                                                                                                        - vos experiences.." 
                           
                           />
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