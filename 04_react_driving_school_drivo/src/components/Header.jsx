// import heroBg from '../assets/img/hero-image.png';
import { useState } from 'react';
import heroVideo from '../assets/video/driving-video.mp4';
import Button from './Button';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className='relative bg-cover bg-no-repeat bg-center w-screen min-h-screen flex items-center sm:justify-start justify-center'
      id='hero'
    >
      <div className='sm:p-0 p-4'>
        <h1 className='text-white text-[clamp(2.25rem,5.5vw,4.5rem)] leading-none tracking-wide mb-6 sm:text-left text-center sm:pl-[0.5em] pl-0 animate-[fadeIn_1.5s_linear]'>
          safe driving is our <br />
          top priority
        </h1>
        <div className='lg:pl-10 md:pl-7 sm:pl-5 py-2 px-4 inline-block bg-[#6485a6] text-white sm:rounded-tr-full sm:rounded-br-full rounded-md mb-4 animate-[slidToRight_1.5s_linear]'>
          <p className='uppercase md:text-base text-sm tracking-wider'>
            course will start on 15<sup>th</sup> november 2024
          </p>
        </div>
        <div className='flex sm:justify-start justify-center lg:pl-10 md:pl-7 sm:pl-5 animate-[fadeIn_1.5s_linear]'>
          <Button text={'our courses'} />
          <Button
            className={'bg-slate-200 text-black hover:bg-white '}
            text={'learn more'}
          />
        </div>
      </div>
      <div className='absolute sm:left-[52%] sm:top-[40%] top-3/4'>
        <div className='w-20 h-20'>
          <Button
            className='relative w-full h-full rounded-full z-30  text-xl  shadow-xl'
            onClick={() => setOpen(true)}
            icon={<i className='fa fa-play' aria-hidden='true'></i>}
          />
          <span className='animate-ping absolute inset-0 z-10 inline-flex h-full w-full rounded-full bg-[#6485a6] opacity-75'></span>
        </div>

        <div
          className={`size-full fixed inset-0 bg-gray-600/60 overflow-x-hidden overflow-y-auto flex justify-center items-center transition ${
            open ? 'scale-100 z-50' : 'scale-0'
          }`}
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full flex flex-col bg-gray-600 max-w-[500px] m-2 rounded-xl shadow-lg transition-transform duration-500 ease-in-out ${
              open ? 'scale-100' : 'scale-50'
            }`}
          >
            <div className='flex justify-end items-center pt-4 px-4'>
              <button
                type='button'
                className='size-8 flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-500 text-white hover:bg-gray-400 focus:outline-none focus:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none'
                onClick={() => setOpen(false)}
              >
                <i className='fa-solid fa-xmark'></i>
              </button>
            </div>
            <div className='p-4 overflow-y-auto'>
              <video src={heroVideo} width='100%' controls autoPlay muted>
                Your browser doesn&apos;t support the video tag
              </video>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
