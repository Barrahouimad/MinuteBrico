import React from 'react';
import useSWR from 'swr'
import Nav from '../home/nav';
const PostuleMission=(props)=>{
    
const fetcher = (url) => fetch(url).then(res =>{return res.json()} )
const { data, error } = useSWR('http://localhost:8080/bricoleurs/'+props.user.id, fetcher)
   if (error) return (
           <div className="d-flex flex-column">
             <img alt="..." src="/assets/logo.png" style={{height:"100px",width:"100px"}} className="logo" />

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


//les cartes  

const Missions= data.missions.map((item)=>{
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
                        </div>
             </div>

           </div>
      
       )
    });

    return(<div>
        <Nav user={props.user} setUser={props.setId} auth={props.auth} setAuth={props.setAuth} />
        <div style={{position:"relative",top:"100px"}} >
        {Missions}
        </div>
                   
                    </div>
               );
}

export default PostuleMission;