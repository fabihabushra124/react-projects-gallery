import PropTypes from 'prop-types';
// import cardImg from '../assets/img/bunch.png';
import Button from '../components/Button';

const Card = ({ children, imgH, cardView, contP, img, title, authors }) => {
  // console.log(authors);
  return (
    <div
      className={`${cardView} m-auto rounded-lg bg-gray-700 shadow-md shadow-purple-900 p-4`}
    >
      <img
        className={`${imgH} object-cover hover:scale-125 transition duration-500`}
        src={img}
        alt='image'
      />
      <div className={`${contP} overflow-hidden`}>
        <h4 className='mb-2 text-sm font-semibold tracking-tight text-white capitalize truncate'>
          {title}
        </h4>
        {authors === undefined ? (
          <p className='text-xs text-gray-400 capitalize'>| no author</p>
        ) : (
          authors.map((author, inx) => (
            <p
              key={inx}
              className='text-xs text-gray-400 capitalize inline-block'
            >
              | {author}
            </p>
          ))
        )}

        <div className='flex justify-center'>{children}</div>
        <p className='my-2 text-xl font-semibold text-gray-400'>$20.22</p>

        <Button
          name='buy now'
          className='px-5 py-0.5 text-sm mx-auto mt-1 inline-block'
        />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  children: PropTypes.array,
  cardView: PropTypes.string,
  imgH: PropTypes.string,
  contP: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.array,
};
