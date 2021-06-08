import React , {useState} from 'react'
import {Multiselect} from 'multiselect-react-dropdown';
import './style.css';

function DropDownListCheckBoxLanguages(props) {
    const data=[
        {langues:"Arabe" , id:1},
        {langues:"Anglais" , id:2},
        {langues:"Francais" , id:3},
        
        
    ]

    const onSelect= (selectedList, selectedItem) => {
      
       document.getElementById("langueSelected").value= document.getElementById("langueSelected").value+'_'+selectedItem.langues;
       const catList=[];
       for(var i=0;i<selectedList.length;i++){
             const cat={
                 nom:selectedList[i].langues
             }
             catList.push(cat);
       }
       console.log(" selected "+catList+" selectedItem  "+selectedItem.langues);

     props.setLangue(catList);

    }
    
    const onRemove=(selectedList, removedItem)=> {
        console.log(removedItem.langues)
        document.getElementById("langueSelected").value= document.getElementById("langueSelected").value.replace('_'+removedItem.langues,'');
    }
    const [selectedValue,setSelectedValue]=useState([]);
    
  

    const[options]=useState(data);
    return (  
           <div >
                <label className="form-label" htmlFor="form5Example1">Langues <span style={{color:'red'}}>*</span> </label>
                <Multiselect options= {options} selectedValues={selectedValue}
                             onSelect={onSelect} 
                             onRemove={onRemove} 
                             showCheckbox={true}
                             displayValue="langues"  />
                <input type="texte" id="langueSelected" hidden/>
           </div>   
    );
}
export default DropDownListCheckBoxLanguages;