import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Button = ({ className, text, icon, onClick }) => {
  return (
    <button
      className={twMerge(
        'bg-[#6485a6] text-white hover:bg-[#7fabd7] px-4 py-2 capitalize rounded-md self-start mr-4 transition duration-500',
        className
      )}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
};
