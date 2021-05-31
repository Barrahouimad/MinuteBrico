import React ,{useEffect,useState}from 'react'
import   {useParams} from  'react-router-dom'
import axios from 'axios';
import ProfileBricoleurDetails from './detailsProfile/ProfileBricoleurDetails'

const ClientToBrico=()=>{
    const {id }=useParams();
    const [user,setUser]=useState({});
   // alert(id);
  useEffect(()=>{
         alert(id)
            axios.get( "http://localhost:8080/bricoleurs/"+id)  
            
            .then(res=>{
            //setUser(res.data);
            setUser(res.data)
            console.log("user id est : "+user.id);   
            
            
            })  
        .catch(err =>{
            console.log("still have error ",err);
            });

    },[])

   
    return(
        <div>
        <ProfileBricoleurDetails  user={user} />
        </div>
    );

   
}
export default ClientToBrico;