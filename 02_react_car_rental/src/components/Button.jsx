import PropTypes from 'prop-types';

const Button = ({ name, className, icon }) => {
  return (
    <button type='button' className={`custom-btn ${className}`}>
      {name} {icon}
    </button>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
};
