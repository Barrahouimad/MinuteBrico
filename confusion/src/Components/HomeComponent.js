import react, {useState} from 'react'
import '../home.css';
import {Modal, ModalHeader,ModalBody,ModalFooter,Form} from 'reactstrap';

function Head(){
 const [keyconnection,setkeyc]=useState(false);
 const [keysignup,setkeys]=useState(false);
 const [fullname,setFullname]=useState("");
 const [email,setemail]=useState("");
 const [password,setpassword]=useState("");
 const [ville,setville]=useState("");
 const [domaine,setdomaine]=useState("");
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
  function handlsignupsubmoit(event){
    event.preventDefault(); 
    const info={
        email:email,
        fullname:fullname,
        ville:ville,
        password:password,
        domaine:domaine
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
  function handelconnectsubmit(event){
    event.preventDefault(); 
    const info={
        email:email,
        password:password,
        domaine:domaine
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
return(
    
    <div>
       <header  >
           <div className="navbar bg-light" style={{boxShadow: "0px 1px 16px  #c5d7bd" }} >
               <img src="assets/Brand.jpeg" style={{height:"40px",width:"110px"}}/>
             
           </div>
       </header>

       <body>
           <div className="row">
                <div className="col-md-6" style={{marginTop:"60px",fontFamily:"'Poppins', sans-serif"}} >  
                 <div className="d-flex flex-column">
                    <h4  className="p-2">Bienvenue dans votre site MinuteBrico</h4>
                    <h5 className="p-2">Postez vos problémes ou prennez des opportunitées de bricolage</h5>
                    <div className=" form" style={{marginTop:"150px"}} >
                        <button id="connecter" className="btn" style={{background:"#383e56", color:"white",marginRight:"10px"}} onClick={()=>{setkeyc(!keyconnection)}} >se connecter</button>
                        <button id="inscrire" className="btn btn-outline-dark" onClick={()=>setkeys(!keysignup)}>s'inscrire</button>
                    </div>
                 </div>  
                </div>

                <div className="col-md-6 mt-5">  
                        <img src='assets/careerb.png' style={{width:"550px",height:"550px",/*boxShadow:"0px 4px 12px #c5d7bd"*/}}/>   
                </div>
            </div> 
            <Modal isOpen={keysignup} toggle={toggles}>
              <ModalHeader toggle={toggles}>Inscrivez vous</ModalHeader>
              <ModalBody>
                  <Form>
                  <div class="mb-3 row">
                        <label for="nom" className="col-sm-2 col-form-label">Nom et Prénom</label>
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
                 <div className="mb-3 row">
                 <label for="exampleDataList" className="form-label">Ville</label>
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
                <label for="formFileMultiple" className="form-label">Photo et CV</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple/>
                </div>
                  </Form>
              </ModalBody>
              <ModalFooter>
                  <button type="submit" onClick={(event)=>handelconnectsubmit(event)} className="btn btn-primary">Créer</button>
              </ModalFooter>
            </Modal>


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
              <ModalFooter>
                  <button type="submit" onClick={(event)=>handlsignupsubmoit(event)} className="btn btn-primary">Créer</button>
              </ModalFooter>
            </Modal>
      </body>

    </div>
);



}
export default Head;