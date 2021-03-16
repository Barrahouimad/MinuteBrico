import react, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../home.css';
//import {BiSearchAlt} from 'React.Component.icons';
import {Modal, ModalHeader,ModalBody,ModalFooter,Form} from 'reactstrap';
//import SearchIcon from '@material-ui/icons/Search';
function Home(){
 const [keyconnection,setkeyc]=useState(false);
 const [keysignup,setkeys]=useState(false);
 const [isBrico,setBrico]=useState(false);
 const [fullname,setFullname]=useState("");
 const [email,setemail]=useState("");
 const [password,setpassword]=useState("");
 const [ville,setville]=useState("");
 const [domaine,setdomaine]=useState("");
 const [search,setSearch]=useState("");
const togglec= ()=>{setkeyc(!keyconnection)};
const toggles= ()=>{setkeys(!keysignup)};
function handlchangeemail(event){
    setemail(event.target.value);
   
  }
  function handlchangename(event){
    setFullname(event.target.value);
   console.log(fullname);
  }
  function handlchangepass(event){
    setpassword(event.target.value);
   
  }
  function handlchangedomaine(event){
    setdomaine(event.target.value);
   
  }
  function handlchangeville(event){
    setville(event.target.value);
   
  }
  const handlSetSearch=(event)=>{
     setSearch(event.target.value);
     console.log(search);
  }
  function handlsignupsubmit(event){
    event.preventDefault(); 
    const info={
        id:5,
        email:email,
        firstName:fullname,
        lastName :fullname,
        birthDate:"01/05/99",
       // ville:ville,
        password:password,
        role:"user",
        creationDate:"01/01/2021"
       // domaine:domaine
    }
    fetch("http://localhost:8080/user",{
        method:'POST',
        body:JSON.stringify(info),
        headers:{
          "Content-Type" : "application/json"
          },
          credentials :"same-origin"
 });
  }
  function handelconnectsubmit(event){
    event.preventDefault(); 
    const info={
        email:email,
        password:password,
     //  domaine:domaine
    }
    fetch("",{
        method:'POST',
        body:JSON.stringify(info),
        headers:{
          "Content-Type" : "application/json"
          },
          credentials :"same-origin"
 });
  }

  // fonction pour l'affichage de l'inscription

  const inscrire=(isBrico,keysignup,toggles)=>{
    if(isBrico){
      return(
        <Modal isOpen={keysignup} toggle={toggles}>
        <ModalHeader toggle={toggles}>Inscrivez vous</ModalHeader>
        <ModalBody>
            <Form>
            <div class="mb-3 row">
                  <label for="nom" className="col-sm-2 col-form-label">Nom complet</label>
                  <div className="col-sm-10">
                  <input type="text" onChange={handlchangename} readonly className="form-control-plaintext" id="nom"/>
                  </div>
           </div>
           <div className="mb-3 row">
                  <label for="domaine" className="col-sm-2 col-form-label">Domaine</label>
                  <div className="col-sm-10">
                  <input type="text" onChange={handlchangedomaine} readonly className="form-control-plaintext" id="domaine" placeholder="Votre domaine ou spécialité"/>
                  </div>
           </div>
           <div className="mb-3 d-flex flex-row">
           <label for="exampleDataList" className="p-2 form-label">Ville</label>
              <input className="form-control" onChange={handlchangeville}list="datalistOptions" id="exampleDataList" placeholder="votre ville"/>
              <datalist id="datalistOptions">
              <option value="Tanger"/>
              <option value="Tetouan"/>
              <option value="Chefchaouen"/>
              <option value="Hoceima"/>
              <option value="Asila"/>
              </datalist>
           </div>
            <div className="mb-3 row">
                  <label for="staticEmail1" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                  <input type="text" readonly onChange={handlchangeemail} className="form-control-plaintext" id="staticEmail1" placeholder="Votre Email"/>
                  </div>
           </div>
          <div className="mb-3 row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Mot de passe</label>
                  <div className="col-sm-10">
                  <input type="password" onChange={handlchangepass} className="form-control" id="inputPassword"/>
                  </div>
          </div>
          <div className="mb-3">
          <label for="formFileMultiple" className="form-label">Photo et CV (OPTIONELS)</label>
          <input className="form-control" type="file" id="formFileMultiple" multiple/>
          </div>
            </Form>
        </ModalBody>
        <div className="d-flex justify-content-center mb-3">
            <button type="submit" onClick={(event)=>handlsignupsubmit(event)} className="btn btn-success">Créer</button>
        </div>
        </Modal>
      );
    }else{
      return(
        <Modal isOpen={keysignup} toggle={toggles}>
        <ModalHeader toggle={toggles}>Inscrivez vous</ModalHeader>
        <ModalBody>
            <Form>
            <div class="mb-3 row">
                  <label for="nom" className="col-sm-2 col-form-label">Nom complet</label>
                  <div className="col-sm-10">
                  <input type="text" onChange={handlchangename} readonly className="form-control-plaintext" id="nom"/>
                  </div>
           </div>
           <div className="mb-3 d-flex flex-row">
           <label for="exampleDataList" className="p-2 form-label">Ville</label>
              <input className="form-control" onChange={handlchangeville}list="datalistOptions" id="exampleDataList" placeholder="votre ville"/>
              <datalist id="datalistOptions">
              <option value="Tanger"/>
              <option value="Tetouan"/>
              <option value="Chefchaouen"/>
              <option value="Hoceima"/>
              <option value="Asila"/>
              </datalist>
           </div>
            <div className="mb-3 row">
                  <label for="staticEmail1" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                  <input type="text" readonly onChange={handlchangeemail} className="form-control-plaintext" id="staticEmail1" placeholder="Votre Email"/>
                  </div>
           </div>
          <div className="mb-3 row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Mot de passe</label>
                  <div className="col-sm-10">
                  <input type="password" onChange={handlchangepass} className="form-control" id="inputPassword"/>
                  </div>
          </div>
            </Form>
        </ModalBody>
        <div className="d-flex justify-content-center mb-3">
            <button type="submit" onClick={(event)=>handlsignupsubmit(event)} className="btn btn-success">Créer</button>
        </div>
        </Modal>
      );
    }
  }

  // le return  
return(
    
    <div>
       <div className="fluid-container"  >
           <div className="navbar bg-light row justify-content-between" style={{boxShadow: "0px 1px 16px  #c5d7bd" }} >
            <div className="container"  >
            <a  href="/home" className="navbar-link"> <img className="col-md-3" src="assets/Brand.jpeg" style={{height:"40px",width:"110px"}}/></a>
                
                <div className="auto d-flex">  
                <input className="form-control  ms-2" id="Search" type="search" onChange={(event)=>handlSetSearch(event)} placeholder="trouver des problèmes similaires"></input>

                  <Link to="/missions" className="nav-link">Consulter Missions</Link>
               </div> 
           </div>
       </div>
    </div>
       <div>
           <div className="row">
                <div className="col-md-6" style={{marginTop:"60px",fontFamily:"'EB Garamond', serif"}} >  
                 <div className="d-flex flex-column">
                    <h4  className="mt-4 p-2">Bienvenue dans votre site MinuteBrico</h4>
                    <h5 className="p-2">Postez vos problémes ou prennez des opportunitées de bricolage</h5>
                    <h4  className="p-2">  مرحبا في موقعكم</h4>
                    <h5 className="p-2">شاركو مشاكلكم و اغتنمو فرص للعمل</h5>
                    <div className=" form" style={{marginTop:"110px"}} >
                        <button id="connecter" className="btn" style={{height:"70px",width:"190px",borderRadius:"150px" ,background:"#383e56", color:"white",marginRight:"20px"}} onClick={()=>{setkeyc(!keyconnection)}} >se connecter</button>
                        <button id="inscrire" style={{height:"70px",width:"200px",borderRadius:"100px"}} className="btn btn-outline-dark" onClick={()=>setkeys(!keysignup)}>s'inscrire</button>
                    </div>
                    <div className="d-flex justify-content-center form-check form-switch">
                      <label className="mt-5 pb-2 form-check-label" style={{paddingRight:"65px"}} for="flexSwitchCheckDefault">Bricoleur ?</label>
                      <input className="mt-5 pb-2 form-check-input" style={{height:"30px",width:"50px"}} onClick={()=>setBrico(!isBrico)} type="checkbox" id="flexSwitchCheckDefault"/>
                    </div>
                 </div>  
                </div>

                <div className="col-md-6 mt-5">  
                        <img src='assets/careerb.png' style={{width:"550px",height:"550px",/*boxShadow:"0px 4px 12px #c5d7bd"*/}}/>   
                </div>
            </div> 
          {inscrire(isBrico,keysignup,toggles)}


            <Modal isOpen={keyconnection} toggle={toggles}>
              <ModalHeader toggle={togglec}>Conectez Vous !</ModalHeader>
              <ModalBody>
                  <Form>
                  <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="text" onChange={handlchangeemail}  readonly class="form-control-plaintext" id="staticEmail" placeholder="Votre Email"/>
                        </div>
                 </div>
                <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Mot de passe</label>
                        <div class="col-sm-10">
                        <input type="password"  onChange={handlchangepass}class="form-control" id="inputPassword"/>
                        </div>
                </div>
                  </Form>
              </ModalBody>
              <div className="d-flex justify-content-center mb-3">
                 <button type="submit" onClick={(event)=>handelconnectsubmit(event)} className=" btn btn-success ">Connecter</button>
              </div>
            </Modal>
      </div>

    </div>
);



}
export default Home;