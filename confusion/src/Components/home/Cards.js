import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>MinuteBlog</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/img-10.jpg'
              text='Comment peindre un mur ?'
              label='Peinture'
              path='/blog'
            />
            <CardItem
              src='assets/img-11.jpeg'
              text='Comment peindre un mur ?'
              label='Jardinage'
              path='/blog1'
            />
            <CardItem
              src='assets/img-12.jpg'
              text='Comment changer un robinet de cuisine ?'
              label='Plomberie'
              path='/blog2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='assets/img-13.jpg'
              text='Comment et quand tailler les plantes de son jardin?'
              label='Jardinage'
              path='/blog3'
            />
            <CardItem
              src='assets/img-14.jpg'
              text='Comment et quand tailler les plantes de son jardin?'
              label='Démenagement'
              path='/blog4'
            />
            <CardItem
              src='assets/img-15.jpeg'
              text='Comment changer un robinet de cuisine ?    '
              label='menuiserie'
              path='/blog5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
