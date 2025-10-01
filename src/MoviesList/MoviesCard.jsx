import React from 'react';
import './MoviesCard.css';
import { FaStar } from 'react-icons/fa';

const MoviesCard = ({ title, poster, year, rating, description }) => {
  return (
    <div className='movies_card_item'>
      <div className='movies_card_img'>
        <img
          src={
            poster ||
            'https://via.placeholder.com/300x450?text=No+Image'
          }
          alt={title}
        />
      </div>
      <div className='movies_card_content'>
        <h3 className='movies_card_title'>{title || 'Movie Title'}</h3>
        <div className='movies_date_rate'>
          <p>{year || '2020'}</p>
          <p>
            {rating || 'N/A'} <FaStar className='card_emoji' />
          </p>
        </div>
        <p className='movies_card_desc'>
          {description ||
            'No description available. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        </p>
      </div>
    </div>
  );
};

export default MoviesCard;
