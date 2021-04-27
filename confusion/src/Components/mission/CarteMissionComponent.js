import React from 'react';
import Axios from 'axios'
const MissionItems= (props)=>{

   const handelPostule=(id)=> {
      console.log(" the id mission : "+id+" with id brico : "+props.user.id);
      if(props.user.id==null){
         Axios.get("http://localhost:8080/bricoaumission/"+props.user.id+"/"+id)
          .catch(err =>{
            console.log("still have error ",err);
          })
      }else{
      document.location.href="http://localhost:3000/login"
     }
   }

 const Missions= props.data.map((item)=>{
    console.log("hello"+ item.id);

    const id=item.id;
       return(
            
           <div  key={item.id} className="container mt-2" >
              <div className="card  text-white" style={{color:"white" , borderRadius:"5px",border:"solid" }}>  
         
              <div className="card-img ">
                    <div id="carouselExampleSlidesOnly"  className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-inner " >
                                <div className="carousel-item active">
                                <img id="missionImage" style={{height:"200px",width:"850px", borderRadius:"5px"}} src={item.images}/>
                                </div>
                                <div className="carousel-item">
                                <img style={{height:"200px",width:"850px", borderRadius:"5px"}} src={item.images}/>
                                </div>
                                <div className="carousel-item">
                                <img style={{height:"200px",width:"850px", borderRadius:"5px"}} src={item.images}/>
                                </div>
                       </div>
                 </div>
                 </div>
                        <div className="card-img-overlay">
                            <div className="d-flex flex-column" style={{border:"1px  #91091E",opacity: "0.5",width:"350px" , height:"150px",background:"gray"}}>
                                 <h3 className="card-title " style={{color:"#D1653E",fontFamily:"'Lato', sans-serif",position:"relative",left:"-110px"}}>{item.titre_mission}</h3>
                                 <p className="card-text" style={{fontFamily:"'Lato', sans-serif",marginRight:"120px"}}>{item.mission_description}</p>
                               <div className="d-flex flex-row">
                               {item.categories.map((x)=>{
                                  return(<p className="p-1 fw-light bg-success" key={x.id}>{ x.nom} </p>); 
                                 })}
                               </div>
                                 
                            </div>
                           <button onClick={()=>handelPostule(id)} className="btn btn-outline-success mt-5"style={{marginLeft:"350px",position:"relative",bottom:"70px"}} >Postuler</button>
                        </div>
             </div>

           </div>
      
       )
    });

    return(<div>
                    {Missions}
                    </div>
               );

}
 export default MissionItems;




