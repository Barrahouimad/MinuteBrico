import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Link} from 'react-router-dom';
function HeroSection(props) {

  if(props.data.length!=0 && props.data.role=="Bricoleur"){

    return (
      <div className='hero-container'>
        <video src='../videos/video-1.mp4' autoPlay loop muted />
        <h1>Bienvenue chers bricoleurs,</h1>
        <p>Travaillez en freelance et gagnez votre vie avec MinuteBrico!</p>
        <br/>
        <Link  to="/missions"><button style={{height:"100px",width:"320px",borderRadius:"22px",fontSize:"22px"}} className="boutton" >Voir les missions postées</button></Link> 

       
      </div>
    );
  }else  if(props.data.length!=0 && props.data.role=="Client"){
    return (
    <div className='hero-container'>
    <video src='../videos/video-1.mp4' autoPlay loop muted />
    <h1>Bonjour chers clients</h1>
    <p>Trouver un MinuteBricoleur pour toutes vos bricoles maison!</p>
    <div className='hero-btns'>
     <Link  to="/switch"><button style={{height:"100px",width:"320px",borderRadius:"22px",fontSize:"22px"}} className="boutton" >Devenir bricoleur</button></Link> 
    </div>
  </div>
  
  
    )}
  
  else{
    return (
      <div className='hero-container'>
        <video src='../videos/video-1.mp4' autoPlay loop muted />
        <h1>Besoin d'aide?</h1>
        <p>Trouver le Meilleur Bricoleur pour résoudre tous vos problèmes</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Trouver un MinuteBricoleur
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Devenir un MinuteBricoleur 
          </Button>
        </div>
      </div>
    );
  }
  
}

export default HeroSection;