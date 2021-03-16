import react from 'react'
import useSWR from 'swr'
const Mission = ()=>{
    const fetcher = (url) => fetch(url).then(res =>{return res.json()} )
    const { data, error } = useSWR('http://localhost:8080/missions', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return (
    <div >      
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
  </div>);

  const Missions= data.map((item)=>{
     return(
        <div className="card" id={item.id} style="width: 18rem;">
            <img src={item.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.domaine}</h5>
                <p className="card-text">{item.description}.</p>
                <button className="bt btn-outline-success" href="/home">Signup or Sign in </button>
            </div>
       </div>

     );
  });

    return(

        <div > 
      {Missions}
        </div>
    );
}
export default Mission;