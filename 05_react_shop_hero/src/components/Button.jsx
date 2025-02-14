import PropTypes from 'prop-types';

const Button = ({ className, text, children }) => {
  return (
    <button className={`btn ${className}`}>
      {text}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.object,
};
