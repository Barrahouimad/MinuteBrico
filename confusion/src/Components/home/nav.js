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
        </ul>:<div>
          <p>{props.user.lastName}</p>
          <button className="btn btn-outline-danger">Logout </button>
        </div>
        
        }

      </div>
    );

}
export default Nav;