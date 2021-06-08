import React , {useState} from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
import './forms.css';

function DropDownListCheckBoxLanguages(props) {
    const data=[
        {langue:"Arabe" , id:1},
        {langue:"Anglais" , id:2},
        {langue:"Francais" , id:3},
        
        
    ]

    const onSelect= (selectedList, selectedItem) => {
      
       document.getElementById("langueSelected").value= document.getElementById("langueSelected").value+'_'+selectedItem.langue;
       const catList=[];
       for(var i=0;i<selectedList.length;i++){
             const cat={
                 nom:selectedList[i].langue
             }
             catList.push(cat);
       }
       console.log(" selected "+catList+" selectedItem  "+selectedItem.langue);

     props.setLangue(catList);

    }
    
    const onRemove=(selectedList, removedItem)=> {
        console.log(removedItem.langue)
        document.getElementById("langueSelected").value= document.getElementById("langueSelected").value.replace('_'+removedItem.langue,'');
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
                             displayValue="langue"  />
                <input type="texte" id="langueSelected" hidden/>
           </div>   
    );
}
export default DropDownListCheckBoxLanguages;