import React from 'react';
import {Link} from "react-router-dom"
import './style.css';
 const Nav=(props)=>   {

    console.log("from nav the auth : "+props.auth+" and the user id : " )
    return (
      <div className="navbar">
        <Link to="/home"><img alt="..." src="/assets/logo.png" className="logo" /></Link>
        <ul className="center">
          <Link to="/how-it-works" ><li>Comment ça marche</li></Link>
          <Link to="/missions" ><li>Missions</li></Link>
        </ul>
   {!props.auth?
        <ul className="auth">
          <Link to="/login" ><li className="seconnect">Se connecter</li></Link>
          <Link to="/sign-up" ><li className="signup">S'incrire</li></Link>
        </ul>:<div className="d-flex content-justify-between">
        <Link className="p-2" to="/postulemissions" >Mes postules</Link>
          <div className="p-2" style={{boxShadow:"2px 2px 6px", borderRadius:"62px" ,height:"50px",width:"50px"}} >
            <img style={{borderRadius:"62px", height:"100%",width:"100%"}} src="assets/career.png"/>
          </div>
          <p className="p-2">{props.user.firstName+" "+props.user.lastName}</p>
          <button onClick={()=>{props.setAuth(false); console.log("from logout : auth : "+props.auth)}} style={{borderRadius:"22px", height:"",width:""}} className="btn btn-outline-danger p-2 mb-4">Logout </button>
        </div>
        
        }

      </div>
    );

}
export default Nav;