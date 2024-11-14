import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import instructor1 from '../assets/img/instructor-1.jpg';
import instructor2 from '../assets/img/instructor-2.jpg';
import instructor3 from '../assets/img/instructor-3.jpg';
import instructor4 from '../assets/img/instructor-4.jpg';
import instructor5 from '../assets/img/instructor-5.jpg';
import instructor6 from '../assets/img/instructor-6.jpg';
import instructor7 from '../assets/img/instructor-7.jpg';
import instructor8 from '../assets/img/instructor-8.jpg';

const Team = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      playOnInit: true,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      delay: 3000,
    }),
  ]);

  const [scrolling, setScrolling] = useState(false);
  const containerRef = useRef();
  const triggerBottom = (window.innerHeight / 5) * 4;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      containerTop < triggerBottom && setScrolling(true);
    });
  }, [triggerBottom]);

  const instructorsData = [
    {
      img: instructor1,
      name: 'oliver bennet',
    },
    {
      img: instructor5,
      name: 'eleanor lawson',
    },
    {
      img: instructor2,
      name: 'henry mitchell',
    },
    {
      img: instructor6,
      name: 'charlotte bennett',
    },
    {
      img: instructor3,
      name: 'nathaniel foster',
    },
    {
      img: instructor7,
      name: 'sophie montgomery',
    },
    {
      img: instructor4,
      name: 'liam reynolds',
    },
    {
      img: instructor8,
      name: 'isabel harrington',
    },
  ];

  return (
    <section
      ref={containerRef}
      className={`py-16 px-2 container mx-auto min-h-screen ${
        scrolling ? 'animate-[fadeIn_2s_linear]' : 'opacity-0'
      }`}
      id='instructors'
    >
      <h2 className='section-title text-center'>our instructors</h2>
      <h2 className='sub-heading mb-3 text-center'>
        meet our qualified instructors
      </h2>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {instructorsData.map((instructor, inx) => (
            <div
              className='embla__slide md:flex-[0_0_26%] max-w-2xl p-4'
              key={inx}
            >
              <div className='relative w-full min-w-72 p-4 mb-4 img-box'>
                <div className='relative'>
                  <img
                    src={instructor.img}
                    alt=''
                    className='aspect-square w-full rounded-lg'
                  />
                  <div className='icon-box'>
                    <a
                      href='#'
                      className='icon text-[#316ff6] hover:text-[#316ff6d0]'
                    >
                      <i className='fa-brands fa-square-facebook'></i>
                    </a>
                    <a
                      href='#'
                      className='icon text-[#000000] hover:text-[#000000d0]'
                    >
                      <i className='fa-brands fa-square-x-twitter'></i>
                    </a>
                    <a
                      href='#'
                      className='icon text-[#0077B5] hover:text-[#0077B5d0]'
                    >
                      <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a
                      href='#'
                      className='icon text-[#d62976] hover:text-[#d62976d0]'
                    >
                      <i className='fa-brands fa-square-instagram'></i>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className='sm:text-xl text-lg'>{instructor.name}</h3>
              <p className='text-[#6485a6] capitalize'>instructor</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
