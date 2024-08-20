import PropTypes from 'prop-types';

const Button = ({ text, children, className }) => {
  return (
    <button
      className={`py-2 px-5 capitalize rounded-md border-2 border-purple-400 bg-gradient-to-tr from-blue-400  via-purple-400 to-purple-500 text-white hover:from-purple-500 hover:via-blue-400 hover:to-blue-500 transition-all duration-150 ease-in-out ${className}`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.object,
  className: PropTypes.string,
};
