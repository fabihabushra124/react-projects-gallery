import { useEffect, useRef, useState } from 'react';
import img1 from '../assets/img/about-b.jpg';
import img2 from '../assets/img/about-s.jpg';

const About = () => {
  const [scrolling, setScrolling] = useState(false);
  const imgRef = useRef();
  const detailsRef = useRef();
  const triggerBottom = (window.innerHeight / 5) * 4;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const imgTop = imgRef.current.getBoundingClientRect().top;
      const detailsTop = detailsRef.current.getBoundingClientRect().top;
      imgTop < triggerBottom && setScrolling(true);
      detailsTop < triggerBottom && setScrolling(true);
    });
  }, [triggerBottom]);

  return (
    <section
      className='container min-h-screen grid lg:grid-cols-2 pt-16 pb-32 mx-auto px-2'
      id='aboutUs'
    >
      <div
        ref={imgRef}
        className={`relative lg:pr-4 lg:mb-0 mb-10 transition-all ${
          scrolling ? 'animate-[slidToRight_1s_linear]' : 'opacity-0'
        }`}
      >
        <img
          className='max-w-48 absolute aspect-square top-0 left-0 border-8 border-white'
          src={img2}
          alt=''
        />
        <img className='w-full pt-7 pl-7 aspect-square' src={img1} alt='' />
      </div>

      <div
        ref={detailsRef}
        className={`flex justify-center flex-col transition-all ${
          scrolling ? 'animate-[slidToLeft_1s_linear]' : 'opacity-0'
        }`}
      >
        <h2 className='section-title'>about us</h2>
        <h2 className='sub-heading mb-3'>
          We Help Students To Pass Test & Get A License On The First Try
        </h2>
        <p className='mb-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          cupiditate id fugit? Porro id, officia quos ut aperiam fugiat
          blanditiis perferendis ipsum quis natus nihil unde impedit non
          laudantium illum.
        </p>
        <p className='mb-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          cupiditate id fugit? Porro id, officia quos ut aperiam fugiat
          blanditiis perferendis ipsum quis natus nihil unde impedit non
          laudantium illum.
        </p>
        <div className='grid grid-cols-2 gap-2 md:text-lg'>
          <div className='flex items-center'>
            <i className='fa-solid fa-hand-point-right text-[#6485a6]'></i>
            <p className='capitalize ml-2 '>fully licensed</p>
          </div>
          <div className='flex items-center'>
            <i className='fa-solid fa-hand-point-right text-[#6485a6]'></i>
            <p className='capitalize ml-2'>online tracking</p>
          </div>
          <div className='flex items-center'>
            <i className='fa-solid fa-hand-point-right text-[#6485a6]'></i>
            <p className='capitalize ml-2 '>affordable fee</p>
          </div>
          <div className='flex items-center'>
            <i className='fa-solid fa-hand-point-right text-[#6485a6]'></i>
            <p className='capitalize ml-2 '>best trainers</p>
          </div>
        </div>
        <div className='mt-5 border-2 border-[#6485a6] rounded-full self-start'>
          <a className='flex items-center md:p-2 p-1' href='tel:+0123456789'>
            <span className='bg-[#6485a6] md:w-10 md:h-10 w-8 h-8 flex items-center justify-center rounded-full text-white mr-3'>
              <i className='fa-solid fa-phone-volume'></i>
            </span>
            <span className='md:text-lg text-[#6485a6]'>+012 345 6789</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
