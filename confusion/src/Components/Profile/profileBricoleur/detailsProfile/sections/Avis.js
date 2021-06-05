import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import {FaStar} from 'react-icons/fa'

function Avis(props) {

  const [reviewsbrico , setReviewsbrico] = useState("");
  //const [nmbrstar , setNmbrstar] = useState(0);
  const profileData = async () => {
    try {
      
      const res = await axios.get("http://localhost:8080/bricoleurs/"+props.user.id);
      setReviewsbrico(res.data.reviewsOnBrico);
      //alert(res.data.reviewsOnBrico[0].star);
      //setNmbrstar(4);  
      //alert(reviewsbrico);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    profileData();
  });
   
 // const nbrStar = reviewsbrico.star


{/*  const starReview = (nbrStar) => {
    for(var i=0 ; i< nbrStar; i++) {
      <FaStar  style={{color:"#D1653E"}} className="star"size={40} />
    }
  }*/}

  const lesReviews= (reviewsbrico)=>{
    let array = []
    for(var i=0;i<reviewsbrico.length;i++){
      array.push(
       <div className="grid__row">
         <div className="grid__item">
          
         <ReactStars   
                size={40}
                count={reviewsbrico[i].star}
                                     
          />
            
         </div>
         <div className="grid__item">
              <h4 className="grid__title">{reviewsbrico[i].comment}</h4>
              <p className="grid__location">{reviewsbrico[i].userName_Client}</p>
              
          </div>
       </div>
       
      )
    }
    return(
      array
    );
  }
    
  if(props.user.length!=0) { return (
        <div className = "profil mb5">
            <h6><i class="fa fa-star" aria-hidden="true"></i>Avis </h6>
             {lesReviews(reviewsbrico)}
        </div>
    )}
}


export default Avis