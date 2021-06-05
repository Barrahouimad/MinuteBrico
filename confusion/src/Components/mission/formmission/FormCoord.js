import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class FormCoord extends Component {

    continue = (input) => {
        this.props.nextStep(input);
    };

    back = e => {
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <Link to="/home" ><img style={{width:"125px",height:"103px",marginBottom:"10px"}} alt="..." src="/assets/logo.png" className="logo" /></Link>

                <h2 className="nb-5" >Faites-nous part de votre adresse et n'ayez pas de soucis de déplacement!</h2>
                <br />
                <div className="form-group">
                    <label style={{float:"left"}} htmlFor="address" >Adresse de mission: <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className="form-control" name="address" onChange={inputChange('address')} value={values.address} />
                </div>
                <br />
                <div className="form-group">
                    <label style={{float:"left"}}htmlFor="zipcode" >Zip Code: </label>
                    <input type="number" className="form-control" name="zipcode" onChange={inputChange('zipcode')} value={values.zipcode} />
                </div>
                <br />
                <div className=" nb-5"  >
                    <label style={{float:"left"}} className="form-label" htmlFor="form5Example2">Ville<span style={{ color: 'red' }}>*</span></label>
                    <select className="form-select" id="city" name="city1" onChange={inputChange('ville')} value={values.ville} required>
                        <option selected></option>
                        <option value="Rabat">Rabat</option>
                        <option value="Agadir">Agadir</option>
                        <option value="Tanger">Tanger</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Fes">Fes</option>
                        <option value="Meknès">Meknès</option>
                        <option value="Tetouan">Tetouan</option>
                        <option value="Ouajda">Ouajda</option>
                        <option value="Nador">Nador</option>
                        <option value="El hoceima">El hoceima</option>
                        <option value="Marrakech">Marrakech </option>
                    </select>
                </div>
                <br />
                <br/>
               


                <div className="row">
                    <div className="col-6">
                        <div className="text-center">
                            <button className="btn btn-secondary" onClick={this.back}>Page précédente</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="text-center">
                            <button disabled={values.ville==''} className="btn btn-primary" onClick={() => this.continue(values)}>Page Suivante</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FormCoord
