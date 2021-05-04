import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(props) {

  if(props.data.length!=0 && props.data.role=="Bricoleur"){

    return (
      <div className='hero-container'>
        <video src='../videos/video-1.mp4' autoPlay loop muted />
        <h1>Bienvenue chers Bricoleur</h1>
        <p>N'hésiter surtout pas à postuler aux missions</p>
       
      </div>
    );
  }else{
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