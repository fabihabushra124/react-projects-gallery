import { useEffect, useRef, useState } from 'react';
import img1 from '../assets/img/choosing-us.jpg';
import img2 from '../assets/img/about-s.jpg';

const WhyChoose = () => {
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
      className='container min-h-screen grid lg:grid-cols-2 pt-32 pb-16 px-2 mx-auto'
      id='whyChooseUs'
    >
      <div
        ref={detailsRef}
        className={`flex justify-center flex-col lg:mb-0 mb-10 ${
          scrolling ? 'animate-[slidToRight_1s_linear]' : 'opacity-0'
        }`}
      >
        <h2 className='section-title'>why choose us!</h2>
        <h2 className='sub-heading mb-3'>best driving school in your city</h2>
        <p className='mb-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          cupiditate id fugit? Porro id, officia quos ut aperiam fugiat
          blanditiis perferendis ipsum quis natus nihil unde impedit non
          laudantium illum.
        </p>
        <div className='grid sm:grid-cols-2 gap-4'>
          <div>
            <div className='flex items-center text-xl'>
              <i className='fa-solid fa-hand-point-right text-[#6485a6]'></i>
              <h4 className='ml-2'>fully licensed</h4>
            </div>
            <p className='text-gray-600'>
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
            </p>
          </div>
          <div>
            <div className='flex items-center text-xl'>
              <i className='fa-solid fa-hand-point-right text-[#6485a6]'></i>
              <h4 className='ml-2'>online tracking</h4>
            </div>
            <p className='text-gray-600'>
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
            </p>
          </div>
          <div>
            <div className='flex items-center text-xl'>
              <i className='fa-solid fa-hand-point-right text-[#6485a6]'></i>
              <h4 className='ml-2'>affordable fee</h4>
            </div>
            <p className='text-gray-600'>
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
            </p>
          </div>
          <div>
            <div className='flex items-center text-xl'>
              <i className='fa-solid fa-hand-point-right text-[#6485a6]'></i>
              <h4 className='ml-2'>best trainers</h4>
            </div>
            <p className='text-gray-600'>
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
            </p>
          </div>
        </div>
      </div>
      <div
        ref={imgRef}
        className={`relative lg:pl-4 ${
          scrolling ? 'animate-[slidToLeft_1s_linear]' : 'opacity-0'
        }`}
      >
        <img
          className='max-w-48 absolute aspect-square top-0 right-0 border-8 border-white'
          src={img2}
          alt=''
        />
        <img className='w-full pt-7 pr-7 aspect-square' src={img1} alt='' />
      </div>
    </section>
  );
};

export default WhyChoose;
