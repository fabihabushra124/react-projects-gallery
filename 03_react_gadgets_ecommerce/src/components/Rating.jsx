import PropTypes from 'prop-types';
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';

const Rating = ({ rating }) => {
  return (
    <div className='flex items-center justify-center space-x-1 rtl:space-x-reverse text-yellow-300'>
      {[...Array(5)].map((_, inx) => {
        let num = inx + 0.5;
        return (
          <span key={inx} className='text-lg'>
            {rating >= inx + 1 ? (
              <FaStar />
            ) : rating >= num ? (
              <FaStarHalfStroke />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.string,
};
