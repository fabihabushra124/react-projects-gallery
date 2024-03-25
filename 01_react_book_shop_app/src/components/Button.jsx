import PropTypes from 'prop-types';

const Button = ({ name, className, children }) => {
  return (
    <button
      type='button'
      className={`text-white bg-gradient-to-r hover:bg-gradient-to-br font-semibold rounded-lg capitalize items-center from-purple-500 via-purple-600 to-purple-700 ${className}`}
    >
      {name} {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.array,
};
