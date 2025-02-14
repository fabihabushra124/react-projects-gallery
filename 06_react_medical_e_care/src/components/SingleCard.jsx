import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const SingleCard = ({ img, title, text }) => {
  return (
    <Card>
      <Card.Img variant='top' src={img} className='circular-icon' />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;

SingleCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
