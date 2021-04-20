import React from 'react'

const Pagination =({totalcartes,carteparpage,paginate})=>{
  const pageNumbers=[];
    
  for(let i=1; i<=Math.ceil(totalcartes/carteparpage);i++){
      pageNumbers.push(i);
  }
    return(
     <nav>
       <ul className="pagination">
           {pageNumbers.map(number=>(
               <li key={number} className="page-item">
                   <a onClick={()=>paginate(number)} className="page-link" style={{color:"#D1653E"}}>
                       {number}
                   </a>
               </li>
           ))}
       </ul>
    </nav>);
}
export default Pagination;