import React, { Component } from 'react'

import SweetAlert from 'sweetalert2-react';
import Nav from "../../home/nav";
import axios from 'axios';


class Form4 extends Component {

    state = {
        showErr : false,
        lang :[]
      }

    add_supp = (e)=>{
        e.target.checked===true?this.setState({
            lang:[...this.state.lang,e.target.value]
        }):this.setState({
            lang:this.state.lang.map(ele=>{
                if(ele!==e.target.value){
                    return ele
                }
            })
        })
        //alert(this.state.lang)
    }

    continue = e => {
        e.preventDefault();
      
        const motdepasse=document.getElementById("motdepasse").value;
        const motdepassecon=document.getElementById("motdepassecon").value;

        if(motdepassecon.length!==0 && motdepasse.length!==0 && motdepasse==motdepassecon){
            axios.put("http://localhost:8080/motdepasse/"+this.props.user.token,{
           
                password:motdepasse
                
            }).then((reponse)=>{
                console.log("coucou")
                console.log(reponse.data)
            }).catch((err)=>{
                console.log(err)
            })
            document.location.href="http://localhost:3000/";


        }
        else{
            this.setState({ showErr: true })
        }
    };

    back = e => {
        e.preventDefault();
        
    }
    
    render() {
        const { values, inputChange } = this.props;
        
        return (

            <div   style={{
                display:"flex",
                flexDirection:"column",
                  paddingtop:"8em"
            }} >
           
            <Nav data={this.props.user}/>
            <div id="Container" className="mx-auto">
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    fontSize:"20px",
                    fontWeight:"700",
                    position:"absolute",
                    left:'100px',
                    top:"200px",
                    bottom:"0",
                    zIndex:"20"
                }}> 
                    <a id="a" style={{color: "#D1653E"}} >
    
                       profil 
                    </a>
    
                    <a id="a" href="/mdp" style={{color: "black"}} >
                       mot de passe 
                    </a>
                
                </div>
                <div id="FormEdit">
                <div className="form-container mt-5 mb-5" style={{width:"50%",paddingTop:"8em"}}>
                        
                        <SweetAlert
                        show={this.state.showErr}
                        title="Error"
                        text="Merci de vérifier tous les champs nécessairs"
                        onConfirm={() => this.setState({ showErr: false })}
                        />
                        
                        
                            <p id="p" className="title">Mot de passe</p>
                            <div style={{marginLeft:"50px", marginRight:"50px"}}>
                                <form>
                                    <h2 id="#h2"></h2>
                        
                                    
                                    <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"block"}} >
                                        <label className="form-label" htmlFor="form5Example1">Nouveau mot de pasee </label>
                                        <input type="text"  className="form-control" id="motdepasse" name="adresse1"   required />
                                    </div>
                        
                                    <div className="form-outline mb-4 md-5" style={{justifyContent:"space-between",display:"block"}} >
                                        <label className="form-label" htmlFor="form5Example1">Confirmer le mot de passe </label>
                                        <input type="text"  className="form-control" id="motdepassecon" name="adresse1"   required />
                                    </div>
                        
                                    <button id="button" onClick={this.continue} style={{float:'left'}} type="submit" className="btn btn-primary btn-block mb-4">Enregister</button>
                                </form>             
                            </div>
                        </div>
                </div>
            </div>
           
            </div>
        )
    }
}
export default Form4;
