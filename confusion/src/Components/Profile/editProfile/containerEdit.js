import React from 'react'
import './forms.css';
import FormEdit from './formEdit';

//mport './Sidebar.css';
import Nav from "../../home/nav";
//import "../../home/style.css"
//import Footer from "../home/Footer"


function ContainerEdit(props) {
    return (
        <div   style={{
            display:"flex",
            flexDirection:"column"

        }} >
       
        <Nav data={props.user}/>
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
                <FormEdit user={props.user}/>
            </div>
        </div>
       
        </div>
    )
}
export default ContainerEdit;
