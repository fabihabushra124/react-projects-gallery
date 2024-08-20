import PropTypes from 'prop-types';
import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import Button from './Button';
import Rating from './Rating';

const Card = ({ img, name, price, rating }) => {
  return (
    <div className='w-full h-full max-w-sm bg-gradient-to-tr from-[#c4b8f8] to-[#e9d5ff] px-4 py-6 text-center rounded-tr-[6rem] rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-[6rem] m-auto relative flex flex-col justify-center'>
      <div className='max-w-48 m-auto'>
        <img className='' src={img} alt='product image' />
      </div>
      <div className='px-5 pb-5'>
        <a>
          <h5 className='text-xl font-semibold capitalize mb-2'>{name}</h5>
        </a>
        {rating ? (
          <div className='flex justify-center'>
            <Rating rating={rating} />
            <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>
              {rating}
            </span>
          </div>
        ) : (
          ''
        )}
        <div className='flex items-center justify-center space-x-3 mt-5'>
          <Button text='buy now' className='py-1 px-6' />
          <Button
            className='from-sky-200 via-sky-200 to-sky-200
            hover:from-sky-300 hover:via-sky-300 hover:to-sky-300 !border border-sky-700 !px-3 py-3 !rounded-full'
          >
            {<FaCartShopping className='text-sky-700 text-xl' />}
          </Button>
          <Button
            className='from-red-200 via-red-200 to-red-200
            hover:from-red-300 hover:via-red-300 hover:to-red-300 !px-3 py-3 !rounded-full !border border-red-700'
          >
            {<MdFavorite className='text-red-700 text-xl' />}
          </Button>
        </div>
      </div>
      <div className='absolute rounded-tl-[2rem] rounded-bl-[2rem] bg-red-700 w-28 py-1 top-0 left-0'>
        <span className='text-3xl font-bold text-white'>${price}</span>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,
};
