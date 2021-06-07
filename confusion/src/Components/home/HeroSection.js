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
        <Link  to="/missions"><Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >Voir les missions postées</Button>
          </Link> 

       
      </div>
    );
  }else  if(props.data.length!=0 && props.data.role=="Client"){
    return (
    <div className='hero-container'>
    <video src='../videos/video-1.mp4' autoPlay loop muted />
    <h1>Bonjour chers clients</h1>
    <p>Trouver un MinuteBricoleur pour toutes vos bricoles maison!</p>
    <div className='hero-btns'>
     {/*<Link  to="/switch"><Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >Devenir MinuteBricoleur</Button></Link>*/ }
          <Button  
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
            <Link to="/switch" >
            Devenir MinuteBricoleur
            </Link>
          </Button>
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
            <Link to="/login" style={{color:"white"}}>
            Trouver un MinuteBricoleur
            </Link>
          </Button>


          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            <Link to="/sign-up">
            Devenir un MinuteBricoleur 
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
}

export default HeroSection;