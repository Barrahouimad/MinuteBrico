import React, { Component, useEffect, useState, useContext } from 'react';
import "./style.css"
import InputComp from "./inputComp"
import { Link } from "react-router-dom"
import Axios from "axios"
import SweetAlert from 'sweetalert2-react';
import Cookies from 'js-cookie';
import Context from '../../Shared/context'
const Login = (props) => {


  const [showErr, setShowErr] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [brico, setBrico] = useState(false);

  const [effect, seteffect] = useState(false);



  function Verify() {
    setemail(document.getElementById("Idemail").value);
    setpassword(document.getElementById("Idpassword").value);
    setBrico(document.getElementById("estBrico").checked);
    var href;
    if (brico) {
      href = "http://localhost:8080/bricoleursCheck/" + email + "/" + password;
    } else {
      href = "http://localhost:8080/ClientAccount/" + email + "/" + password;
    }
    //alert(href);
    console.log("input in function verify : " + email);
    console.log(" the get axios : http://localhost:8080/ClientAccount/" + email + "/" + password)


    Axios.get(href)



      .then(res => {

        console.log("reponse du db sur login  : " + res.data[0].id);
        if (res.data.length != 0) {

          // the cookie 
          Cookies.set('Token', res.data[0].token)
          Cookies.set('Role', res.data[0].role)
          document.location.href = "http://localhost:3000/home";
        } else {

          setShowErr(true);
          console.log("the new auth in else " + props.auth)

        }

      })
      .catch(err => {
        console.log("still have error ", err);
      })

  }
  //function Try(res,setId,setAuth,auth){
  // console.log("from try : "+res.data);


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
        <Link to="/home"> <img style={{width:"125px",height:"103px",marginBottom:"10px"}} alt="..." src="/assets/logo.png" className="logo" /></Link>
        <p className="title">Connexion</p>
        <form onSubmit={(e) => {
          e.preventDefault()
          Verify()
        }}>
          <InputComp className="AdreesInput" placeHolder="Adresse e-mail" type="email" name="email" Id="Idemail" />
          <InputComp className="passwordInput" placeHolder="Mot de passe" type="password" name="password" Id="Idpassword" />

        <br/>
          <div className="form-group">
          <input class="form-check-input" type="checkbox" id="estBrico"/>
          <label class="form-check-label mx-5" for="flexCheckDefault">
            Bricoleur?
                </label>
          </div>
          
          <input type="submit" className="Submit" value="Se connecter" />
        </form>
        <div className="Or">
          <div className="bar"></div>
          <p className="content">ou bien</p>
          <div className="bar"></div>
        </div>
        <div className="DejaSeconnact">Vous n'avez pas de compte? <Link to="/signup" className="btnConnect">S'inscrire</Link></div>
      </div>
      <img alt="..." src="/assets/12.jpeg" className="bg" />
    </div>
  );

}
export default Login;