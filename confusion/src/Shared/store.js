import React from 'react'


const Store=()=>{
    const [store,setStore]=React.useState({value:'',auth:null,list:[]});
    const actions=(action)=> {
      const   {type,payload}=action;
      switch(type){
          case 'setStore':
              return setStore(payload);
              break;
          default :
              return store;
      }
     
    }
   return {store,actions}
 
}
export default Store;