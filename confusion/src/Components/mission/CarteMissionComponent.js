import React,{useState} from 'react';
import Axios from 'axios'
import SweetAlert from 'sweetalert2-react';
const MissionItems= (props)=>{
   const [show,setShow]=useState(false);
   const handelPostule=(id)=> {
      console.log(" the id mission : "+id+" with id brico : "+props.user.id+(props.user.id==null));
      if(props.user.length!=0){
         Axios.get("http://localhost:8080/bricoaumission/"+props.user.id+"/"+id)
          .catch(err =>{
            console.log("still have error ",err);
          })
          setShow(true);
      }else{
      document.location.href="http://localhost:3000/login"
     }
   }
var Missions=()=>{
   return(
      <div>
         
      </div>
   );
};
if(props.data.length!=0){
  Missions= props.data.map((item)=>{
    console.log("hello"+ item.id);

    const id=item.id;
       return(
            
           <div  key={item.id} className="container mt-2" >
              <div className="card  text-white" style={{color:"white" , borderRadius:"5px",border:"solid" }}>  
         
              <div className="card-img ">
                    <div id="carouselExampleSlidesOnly"  className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-inner " >
                                <div className="carousel-item active">
                                <div id="missionImage" style={{height:"200px",width:"850px", borderRadius:"5px"}}/>
                                </div>
                                <div className="carousel-item">
                                <div style={{height:"200px",width:"850px", borderRadius:"5px"}}/>
                                </div>
                                <div className="carousel-item">
                                <div style={{height:"200px",width:"850px", borderRadius:"5px"}}/>
                                </div>
                       </div>
                 </div>
                 </div>
                        <div className="card-img-overlay">
                            <div className="d-flex flex-column" style={{border:"1px  #91091E",opacity: "0.5",width:"650px" , height:"160px",background:"#a5a19f"}}>
                                 <h3 className="card-title " style={{color:"#D1653E",fontFamily:"'Lato', sans-serif",position:"relative",left:"-240px",fontSize:"28px"}}>{item.titre_mission}</h3>
                                 <p className="card-text" style={{fontFamily:"'Lato', sans-serif",marginRight:"170px"}}>{item.mission_description}</p>
                               <div className="d-flex flex-row">
                               {item.categories.map((x)=>{
                                  return(<p className="p-2 fw-light " key={x.id} style={{background:"#D1653E"}}>{ x.nom} </p>); 
                                 })}
                               </div>
                                 
                            </div>

{(props.user.role=="Bricoleur")?
                           <button onClick={()=>handelPostule(id)} className="btn btn-outline-success mt-5"style={{marginLeft:"350px",position:"relative",bottom:"100px"}} >Postuler</button>:<div></div>
                       }
                        </div>
             </div>

           </div>
      
       )
    });
   }
    return(<div>
        <SweetAlert
              show={show}
              title="Congratulations"
              icon='warning'
              text="Vous avez bien postuler à cette mission"
              onConfirm={() => {
                setShow(false)
              }}
            />
                    {Missions}
                    </div>
               );

}
 export default MissionItems;




