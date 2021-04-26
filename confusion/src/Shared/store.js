import React from 'react'


const Store=()=>{
    const [auth,setAuth]=React.useState(false);
    const store1={
        name:"{fullName}",
        id:"{id}",
        role:"{role}",
        Auth:{auth,setAuth}
     
    }
   return(
       {store1}
   );
}
export default Store;