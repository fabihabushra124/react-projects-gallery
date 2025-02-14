import { useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Card = ({ text, price, card_img }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className='card col-lg-3 col-md-6 col-sm-12'>
      <button className='favorite' onClick={() => setIsClicked(!isClicked)}>
        <i
          className={`${isClicked ? 'fa-solid red' : 'fa-regular'} fa-heart`}
        ></i>
      </button>
      <img src={card_img} className='card-img-top' alt='Iphone' />
      <div className='card-body'>
        <p className='card-text'>{text}</p>
        <h5 className='card-title'>{price}</h5>
        <Button className='black-btn' text='buy now' />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  text: PropTypes.string,
  price: PropTypes.string,
  card_img: PropTypes.string,
};
