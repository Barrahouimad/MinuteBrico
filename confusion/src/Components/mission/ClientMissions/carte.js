import react from 'react'

const Carte =(props)=>{
    var format=()=>{
        return(<div></div>)
    };
    if(props.data!=null) {format=props.data.map((item)=>{
        return(
            <div key={item.id}  className="mt-3 row justify-content-center">
                 <div style={{height:"200px",borderRadius:"5px" }} className="col-md-6 col-xs-10">
                    <div className="card">
                       <h3 style={{position:"absolute", left:"9px"}} > {item.titre_mission}</h3>
                       <div className="mt-4 card-body">
                               <div className=" d-flex flex-column">
                                <p style={{float:"left"}} className="col-12 card-text">{item.mission_description}</p>
                                <div className="d-flex flex-row">
                                    {item.categories.map((x)=>{
                                    return(
                                    <p  key={x.id} style={{color:"#D1653E"}}  className="col-2 " >{ x.nom} </p>
                                    ); 
                                    })}
                                 </div>
                                 </div>
                              {(!window.location.href.includes("carddetails") || item.etat_mission==2 )?
                              <a style={{float:"right"}} href={"carddetails/"+item.id} className="mt-4 btn btn-success">Voir détails</a>:<p></p>}
                       </div>
                    </div>
                 </div>
                    <div style={{height:"200px", boxShadow:"2px 3px 20px 12px",marginLeft:"10px",paddingTop:"70px",background:"#ffff",borderRadius:"5px"}}  className="pl-3 col-md-2 col-xs-10 ">
                      {(item.etat_mission==0)?<h1 style={{color:"green"}} >Postée</h1>:
                          (item.etat_mission==1)?<h1 style={{color:"gray"}} >En cours</h1>:
                        <h1 id="h1" style={{color:"#D1653E"}} >Terminé</h1>
                      }
                      
                    </div>
            </div>
            )});}
  return(
    
        <div>
          {format}      
        </div>
 
  );
}
export default Carte;