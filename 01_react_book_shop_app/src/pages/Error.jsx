import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Error = () => {
  return (
    <div className='w-full h-[65vh] flex flex-col items-center justify-center'>
      <h1 className='text-purple-600 font-semibold text-7xl mb-5'>Oops!</h1>
      <p className='text-2xl mb-7 text-white capitalize'>
        404 - Page not found
      </p>
      <Link to='/'>
        <Button name={'go to home'} className={'px-8 py-1'} />
      </Link>
    </div>
  );
};

export default Error;
