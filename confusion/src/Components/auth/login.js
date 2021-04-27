import React, { Component, useEffect,useState,useContext } from 'react';
import "./style.css"
import InputComp from "./inputComp"
import {Link} from "react-router-dom"
import Axios from "axios"
import SweetAlert from 'sweetalert2-react';
import Cookie from 'js-cookie';
import Context from '../../Shared/context'
const Login =(props)=> {
  

  const [showErr,setShowErr]=useState(false);
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [effect,seteffect]=useState(false);



 function Verify (){
 
  setemail(document.getElementById("Idemail").value);
  setpassword( document.getElementById("Idpassword").value);
    console.log("input in function verify : "+email);
 console.log(" the get axios : http://localhost:8080/ClientChek/"+email+"/"+password)


   Axios.get("http://localhost:8080/bricoleursCheck/"+email+"/"+password)

    

 .then(res=>{

      console.log("reponse du db sur login  : "+res.data[0].id);
      if(res.data.length!=0){
       // Try(res,props.setId,props.setAuth,props.auth);
     
        // document.location.href="http://localhost:3000/home"
        props.setId({id: res.data[0].id,
          firstName:res.data[0].firstName,
          lastName:res.data[0].lastName,
          email:res.data[0].email});
    
    
        props.setAuth(true);
        seteffect(true);
        console.log("the new auth  "+props.auth+"the user : "+props.user.email)
     

      }else{
        props.setAuth(false);
        setShowErr(true);
        console.log("the new auth in else "+props.auth)

      }

  })  
  .catch(err =>{
    console.log("still have error ",err);
  })  

  }
//function Try(res,setId,setAuth,auth){
 // console.log("from try : "+res.data);
   useEffect(()=>{
     if(effect)
    { console.log("from try/effect : "+props.auth);
    props.setAuth(true);}
    
   },[props.auth]);

//}
    return (
      <div className="_Signup">
          <div className="SignUpPage">
          <SweetAlert
              show={showErr}
              title="Error"
              text="Verifier votre email ou password"
              onConfirm={() => setShowErr(false)}
            />
           <Link to="/home"> <img alt="..." src="/assets/logo.png" className="logo" /></Link>
            <p className="title">Connecter à votre compte</p>
            <form onSubmit={(e)=>{
              e.preventDefault()
              Verify()
            }}>
                <InputComp className="AdreesInput" title="Adresse e-mail" placeHolder="Adresse e-mail" type="email" name="email" Id="Idemail"/>
                <InputComp className="passwordInput" title="Mot de passe" placeHolder="Mot de passe" type="password" name="password" Id="Idpassword"/>
                <input type="submit" className="Submit" value="Se connecte" />
            </form>
            <div className="Or">
              <div className="bar"></div>
              <p className="content">or</p>
              <div className="bar"></div>
            </div>
            <div className="DejaSeconnact">Vous n'avez pas de compte? <Link to="/signup" className="btnConnect">S'inscrire</Link></div>
       </div>
          <img alt="..." src="/assets/12.jpeg" className="bg" />
      </div>
    );

}
export default Login;