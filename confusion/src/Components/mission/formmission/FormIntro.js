import React, { Component } from 'react';
import Select from 'react-select'
import {Link} from 'react-router-dom';

export class FormIntro extends Component {

    continue = (input) => {
        this.props.nextStep(input);
    };

    render() {
        const { values, inputChange,erreur,selectChange } = this.props;
        const options = [
            { value: 'peinture', label: 'Peinture' },
            { value: 'jardinage', label: 'Jardinage' },
            { value: 'plomberie', label: 'Plomberie' }, 
            { value: 'broderie', label: 'Broderie' }, 
            { value: 'menuiserie', label: 'Menuiserie' }, 
            { value: 'demenegement', label: 'Déménagement' }



        ]
        

        return (
            <div className="form-container">
              <Link to="/home" ><img style={{width:"125px",height:"103px",marginBottom:"10px"}} alt="..." src="/assets/logo.png" className="logo" /></Link>

                <h1 className="nb-5" >Veuillez remplir ce formulaire!</h1>
                <h3 className="nb-5">Nos Bricoleurs seront à votre disposition dès que vous postez votre mission.</h3>
                <br />
                <div className="form-group">
                    <label style={{float:"left"}} htmlFor="title" >Titre de mission:<span style={{color:'red'}}>*</span> </label>
                    <input required type="text" className="form-control" name="title" onChange={inputChange('title')} value={values.title} />
                </div>
                <br />
                
                <div className="form-group">
                    <label style={{float:"left"}} htmlFor="description" >Descriptif de mission: <span style={{color:'red'}}>*</span></label>
                    <textarea required type="text" className="form-control" name="description" onChange={inputChange('description')} value={values.description} />
                </div>
                {erreur && <div className="alert alert-danger" role="alert">
                    Veuillez ne pas dépasser 100 caractères 
                </div>}
                <br />
                <div style={{float:"left"}} className="form-group">
                    <label htmlFor="category" >Compétences requises: <span style={{color:'red'}}>*</span></label>
                    <Select
                        type="text" className="form-control" name="category" onChange={selectChange} value={values.category}
                        options={options} />
                    {/* <input type= "text" className = "form-control" name= "category" onChange= {inputChange('category')} value = {values.category} /> */}
                </div>

                <br />

                <div className="text-center">
                    <button style={{float:"right"}} disabled={erreur==true || values.description.length <= 0 || values.category=='' } className="btn btn-primary" onClick={() => this.continue(values)}>Page Suivante</button>
                </div>

            </div>
        )
    }
}

export default FormIntro
