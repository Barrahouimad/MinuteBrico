import { Link } from "react-router-dom";
import "./sidebar.css";
import importImg from '../images/ikea.png';
import importImg1 from '../images/casa.jpg';
import importImg2 from '../images/mobilia.png';
import importImg3 from '../images/kita.jpg';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">

              Jardinage
          </li>
          <li className="sidebarListItem">
              Bricolage
          </li>
          <li className="sidebarListItem">
              Terre
          </li>
          <li className="sidebarListItem">
              Astuces
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> Sponsorisé par:</span>
        <img
          src={importImg} alt='import'></img><br/>
        <img
          src={importImg1} alt='import'></img><br/>
        <img
          src={importImg2} alt='import'></img><br/>
        <img
          src={importImg3} alt='import'></img><br/>

      </div>
      
    </div>
  );
}
