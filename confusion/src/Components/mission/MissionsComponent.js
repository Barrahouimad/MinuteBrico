import React from 'react'
import useSWR from 'swr'
import Nav from '../home/nav';
import MissionItems from './CarteMissionComponent';
import './mission.css'
const Mission = ()=>{
  const[categorie,setCategorie]=React.useState('Tout');
  const[radioBoutton,setradioBoutton]=React.useState(2);
 const [categories,setCategories]=React.useState([]);
 const [donnee,setdonnee]=React.useState(["Menuiserie"]);

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



const fetcher = (url) => fetch(url).then(res =>{return res.json()} )
 const { data, error } = useSWR('http://localhost:8080/missions', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) {return (
    <div style={{position:"absolute",left:"45%",top:"45%" }}>      
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
  </div>);}


//alert(data);
console.log("categories empty ?"+(categories.length==0)+" les donnéesss  "+((data[0].categories.filter((y)=>(donnee.includes("hh"))).length==1)?true:false)+"  second   "+data.filter((x)=>((x.categories.filter((y)=>(categories.includes(y.nom))).length==0)?false:true)));
    return(
   <div  id="mission"  className="fluid-container" className="d-flex flex-column">
       <div id="briconav" style={{position:"absolute",top:"0px"}}>
       <Nav/>
       </div>
       <div id="bricotext" style={{border:"1px",textDecorationColor:"black",height:"100px",width:"100%",background:"#9BB9B9",position:"absolute",top:"120px"}}>
        <h1 id="something" >Bricolage à la minute !</h1>
       </div>
       <div className="container" style={{position:"relative",top:"220px"}} >
       


           <div id="miss" className="container d-flex flex-row mt-3" style={{position:"relative",top:"0px"}}>
                  <div className="col-md-4 mt-3" style={{border:"1px ",borderRadius:"5px",boxShadow:"3px 5px 25px",height:"450px",background:"white"}}>
                  <h3>Filtrer par :</h3>
                  <hr/>
                  <h4>Catégories</h4>
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
                  </div>
                  <div id="box" className="col-md-7" style={{ borderRadius:"2px",height:"450px",position:"absolute",right:"70px",top:"0px"}} > 
                      
                     <MissionItems data={data.filter((x)=>(((x.categories.filter((y)=>(categories.includes(y.nom))).length==0)?false:true)||(categories.length==0)))} />

                  </div>
     
          </div>
        </div>

    );
}
export default Mission;