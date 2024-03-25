import bgImg from '../assets/img/bunch.png';
import Button from './Button';
import { MdDoubleArrow } from 'react-icons/md';

const Header = () => {
  return (
    <header
      className='h-[90vh] flex items-center justify-center bg-gradient-to-tl from-purple-800 from-30% via-gray-700 via-40% to-gray-800 to-70% b-line'
      id='hero'
    >
      <div className='container flex flex-col md:flex-row justify-center items-center px-4 h-full'>
        <div className='w-full flex flex-col justify-end md:justify-center text-white h-full'>
          <h1 className='text-purple-500 text-6xl font-semibold capitalize tracking-widest mb-2'>
            36% off
          </h1>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            distinctio corrupti obcaecati minus aliquam impedit ratione ut
            deleniti sint atque?
          </p>
          <div className='mt-4'>
            <Button className='px-9 py-1 text-lg flex' name='order now'>
              {' '}
              <MdDoubleArrow className='ms-2' />
            </Button>
          </div>
        </div>
        <div className='flex justify-center items-end pb-5 md:pb-20 w-full h-full'>
          <img
            src={bgImg}
            alt='Books stack image'
            className='max-w-[215px] md:max-w-full animate-bouncy'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
