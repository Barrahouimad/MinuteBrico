import React from 'react';

const MissionItems= (props)=>{
   
 const Missions= props.data.map((item)=>{
    console.log("hello"+ item.id);
       return(
     
           <div  key={item.id} className="container mt-2" >
              <div className="card  text-white" style={{color:"white" , borderRadius:"25px",border:"solid" }}>  
         
              <div className="card-img ">
                    <div id="carouselExampleSlidesOnly"  className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-inner " >
                                <div className="carousel-item active">
                                <img id="missionImage" style={{height:"200px",width:"850px", borderRadius:"25px"}} src={item.image}/>
                                </div>
                                <div className="carousel-item">
                                <img style={{height:"200px",width:"850px", borderRadius:"25px"}} src={item.image}/>
                                </div>
                                <div className="carousel-item">
                                <img style={{height:"200px",width:"850px", borderRadius:"25px"}} src={item.image}/>
                                </div>
                       </div>
                 </div>
                 </div>
                        <div className="card-img-overlay">
                            <div className="d-flex flex-column" style={{border:"1px solid #91091E",opacity: "0.5",width:"350px" , height:"150px",background:"#91091E"}}>
                                 <h3 className="card-title " style={{color:"#D1653E",fontFamily:"'Lato', sans-serif",position:"relative",left:"-100px"}}>{item.titre_mission}</h3>
                                 <p className="card-text" style={{fontFamily:"'Lato', sans-serif",marginRight:"180px"}}>{item.description}</p>
                               <div className="d-flex flex-row">
                               {item.categories.map((x)=>{
                                  return(<p className="p-1" key={x.id}>{ x.nom} </p>); 
                                 })}
                               </div>
                                 
                            </div>
                           <button className="btn btn-outline-success mt-5"style={{marginLeft:"350px",position:"relative",bottom:"70px"}} >Postuler</button>
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