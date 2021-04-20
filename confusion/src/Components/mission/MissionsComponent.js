import React from 'react'
import useSWR from 'swr'
import Nav from '../home/nav';
import MissionItems from './CarteMissionComponent';
import './mission.css'
import Footer from '../home/Footer';
import Pagination from './PaginationComponent';
const Mission = ()=>{
  const[categorie,setCategorie]=React.useState('Tout');
  const[radioBoutton,setradioBoutton]=React.useState(2);
 const [categories,setCategories]=React.useState([]);
 const [donnee,setdonnee]=React.useState(["Menuiserie"]);
const [motcle,setMotcle]=React.useState(' ');
const[currentpage,setCurrentpage]=React.useState(1);
const[postperpage,setPostperpage]=React.useState(4);

const indexOfLastCarte=currentpage*postperpage;
const indexOfFirstCarte=indexOfLastCarte - postperpage;
const paginate= pageNumber=>setCurrentpage(pageNumber);
  function radioHandler(event){

      setradioBoutton(1);
      console.log("from realisée  "+radioBoutton);

  }
  function radioHandlerNon(event){

      setradioBoutton(0);
      console.log("from NON realisée  "+radioBoutton);
  
  }
  function handelCategorie(event){

    setCategorie(event.target.value);
      console.log("catégorie :  " + categories);
    
  }
  function radioHandlerTout(){
    setradioBoutton(2);
    console.log("from All  "+radioBoutton +"categorie  "+categorie);
    
  }
  function handelcheckbox(event,categories){
   console.log("is Cheked : "+event.target.checked);
    setCategories(categories.filter(x=>x!==event.target.value));
    console.log("categories : blur "+categories);
  }
  function handelcheckboxclick(event,categories){
    console.log("is Cheked : "+event.target.checked);
    
    if((!categories.includes(event.target.value)) && (event.target.checked) ){
    categories.push(event.target.value);
    setCategories(categories);
    setCategories(categories.filter(x=>x!==null));
    }else if(!(event.target.checked)){
      setCategories(categories.filter(x=>x!==event.target.value));
      console.log("from focus deleted "+categories.filter(x=>x!==event.target.value));
    }
    console.log("categories : focus "+categories);
 
  }
    function handelmotcle(){
      setMotcle(document.getElementById("motcle").value);
    }


const fetcher = (url) => fetch(url).then(res =>{return res.json()} )
 const { data, error } = useSWR('http://localhost:8080/missions', fetcher)
    if (error) return (
            <div className="d-flex flex-column">
              <img alt="..." src="/assets/logo.png" className="logo" />

                <p className="text-danger">failed to load</p>

            </div>);
    if (!data) {return (
      <div>
        <img alt="..." src="/assets/logo.png" className="logo" />
        <div className="d-flex flex-row" style={{position:"absolute",left:"50%",right:"50%",top:"45%" }}>      
           <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>  
  </div>
  </div>);}


//alert(data);
const currentCartes=data.slice(indexOfFirstCarte,indexOfLastCarte);
//setNombrecarte(data.length);


console.log("nombre de cartes   : "+data.length+" categories empty ?"+(categories.length==0)+" les donnéesss  "+((data[0].categories.filter((y)=>(donnee.includes("hh"))).length==1)?true:false)+"  second   "+data.filter((x)=>((x.categories.filter((y)=>(categories.includes(y.nom))).length==0)?false:true)));
    return(
   <div  id="mission"  className="fluid-container" className="d-flex flex-column">
       <div id="briconav" style={{position:"absolute",top:"0px",zIndex:"1"}}>
       <Nav/>
       </div>
       <div id="bricotext" className="d-flex justify-content-center flex-row" style={{border:"1px",textDecorationColor:"black",height:"100px",width:"100%",background:"#FFFFFF",position:"absolute",top:"160px",alignItems:"center"}}>
       
            <input type="text" className="form-control" style={{width:"30%",height:"40%",marginRight:"90px"}} placeholder="Rechercher pour des mots clés" id="motcle"/>
            <button onClick={handelmotcle} style={{border:"1px ", background:"#D1653E",height:"40%",width:"10%",borderRadius:"5px",color:"white"}} >Rechercher</button>
         
       </div>
       <div className="container" style={{position:"relative",top:"270px"}} >
       


           <div id="miss" className="container d-flex flex-row mt-3" style={{position:"relative",top:"0px"}}>
                  <div className="col-md-4 mt-3" style={{border:"1px ",borderRadius:"5px",height:"650px",background:"white"}}>
                  <p style={{float:"left"}} className="fs-3 px-4">Filtrer par :</p>
                <div className="container">
                <hr style={{clear:"both"}}/>
                </div>
                
                  <p style={{float:"left"}} className="fs-4 px-4">Catégories</p>
                  <div className="container d-flex flex-column">
                            <div className="form-check d-flex flex-row">
                                  <input className="form-check-input"   onClick={(event)=>handelcheckboxclick(event,categories)} type="checkbox"   value="Menuiserie" id="flexCheckDefault"/>
                                  <label className="form-check-label mx-2" for="flexCheckDefault">
                                    Menuiserie
                                  </label>
                            </div>
                            <div className="form-check d-flex flex-row">
                                  <input className="form-check-input" type="checkbox" onClick={(event)=>handelcheckboxclick(event,categories)}  value="Plomberie" id="flexCheckChecked"/>
                                  <label className="form-check-label mx-2" for="flexCheckChecked">
                                    Plomberie
                                  </label>
                            </div>
                            <div className="form-check d-flex flex-row">
                                  <input className="form-check-input" type="checkbox" onClick={(event)=>handelcheckboxclick(event,categories)} value="Jardinage" id="flexCheckDefault"/>
                                  <label className="form-check-label mx-2" for="flexCheckDefault">
                                    Jardinage
                                  </label>
                            </div>
                            <div className="form-check d-flex flex-row">
                                  <input className="form-check-input" type="checkbox" onClick={(event)=>handelcheckboxclick(event,categories)} value="Peinture" id="flexCheckChecked"/>
                                  <label className="form-check-label mx-2" for="flexCheckChecked">
                                    Peinture
                                  </label>
                            </div>
                            
                              <div className="form-check d-flex flex-row">
                                  <input className="form-check-input" type="checkbox" onClick={(event)=>handelcheckboxclick(event,categories)} value="Bricolage maison" id="flexCheckDefault"/>
                                  <label className="form-check-label mx-2" for="flexCheckDefault">
                                  Bricolage maison
                                  </label>
                            </div>
                            <div className="form-check d-flex flex-row">
                                  <input className="form-check-input" type="checkbox" onClick={(event)=>handelcheckboxclick(event,categories)} value="Electricite" id="flexCheckChecked"/>
                                  <label className="form-check-label mx-2" for="flexCheckChecked">
                                    Electricité
                                  </label>
                            </div>
                            <div className="form-check d-flex flex-row">
                                  <input className="form-check-input" type="checkbox" onClick={(event)=>handelcheckboxclick(event,categories)} value="Electromenager" id="flexCheckDefault"/>
                                  <label className="form-check-label mx-2" for="flexCheckDefault">
                                    Electroménager
                                  </label>
                            </div>
                            <div className="form-check d-flex flex-row">
                                  <input className="form-check-input" type="checkbox" onClick={(event)=>handelcheckboxclick(event,categories)} value="Montage de meubles" id="flexCheckDefault"/>
                                  <label className="form-check-label mx-2" for="flexCheckDefault">
                                  Montage de meubles
                                  </label>
                              
                                
                                 
                            </div>
                          
                    

                            </div>
                      </div>
                
                   <div className="col-md-7"  style={{background:"white",position:"relative",top:"14px",left:"30px",height:"650px"}}>
                       <div style={{position:"relative",top:"10px",left:"45%"}}>
                      <Pagination totalcartes={data.length} carteparpage={postperpage} paginate={paginate} />

                      </div>

                      <div className="container">
                          <hr />
                      </div>

                      <div id="box"  style={{ borderRadius:"2px",height:"90%",width:"96%",position:"realative",top:"40px"}} > 
                          
                        <MissionItems data={currentCartes.filter((x)=>((((x.categories.filter((y)=>(categories.includes(y.nom))).length==0)?false:true) && (x.description.includes(motcle)) )||(((x.categories.filter((y)=>(categories.includes(y.nom))).length==0)?false:true) && (motcle==' ') )||((categories.length==0)  && (x.description.includes(motcle)))||((categories.length==0)  && (motcle==' '))))} />
                      
                      </div>
                  </div>
                  </div>
          </div>
        
        </div>

    );
}
export default Mission;