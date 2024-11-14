import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import client1 from '../assets/img/client-1.jpg';
import client2 from '../assets/img/client-2.jpg';
import client3 from '../assets/img/client-3.jpg';
import client4 from '../assets/img/client-4.jpg';

const Testimonials = () => {
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

  const clientsFeedbackData = [
    {
      img: client1,
      name: 'john doe',
      profession: 'engineer',
      comment:
        'Expedita officiis maiores eos eius asperiores rerum ex vero consequuntur perspiciatis ea iure ullam ratione',
    },
    {
      img: client2,
      name: 'sophie montgomery',
      profession: 'doctor',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis maiores eos eius asperiores rerum ex',
    },
    {
      img: client3,
      name: 'henry mitchell',
      profession: 'lawyer',
      comment: 'Consequuntur perspiciatis ea iure ullam ratione iste sapiente',
    },
    {
      img: client4,
      name: 'eleanor lawson',
      profession: 'homemaker',
      comment:
        'Ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis maiores',
    },
  ];
  return (
    <section
      ref={containerRef}
      className={`py-16 container mx-auto min-h-screen ${
        scrolling ? 'animate-[fadeIn_2s_linear]' : 'opacity-0'
      }`}
      id='testimonials'
    >
      <h2 className='section-title text-center'>testimonials</h2>
      <h2 className='sub-heading mb-3 text-center'>what our clients say</h2>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {clientsFeedbackData.map((data, inx) => (
            <div
              className='embla__slide md:flex-[0_0_46%] flex-[0_0_100%] max-w-lg p-2'
              key={inx}
            >
              <div className='bg-white p-4 shadow-md rounded-lg h-full'>
                <div className='w-36 relative p-4 border-2 border-[#6485a6] rounded-full mx-auto mb-5'>
                  <img
                    src={data.img}
                    alt=''
                    className='aspect-square w-full rounded-full'
                  />
                  <div className='bg-[#6485a6] absolute w-8 h-8 text-lg rounded-full flex items-center justify-center text-white bottom-2 left-1/2 -translate-x-1/2'>
                    <i className='fa-solid fa-quote-right'></i>
                  </div>
                </div>
                <p className='text-gray-500 text-center mb-4'>{data.comment}</p>
                <h3 className='sm:text-xl text-lg text-center'>{data.name}</h3>
                <p className='text-[#6485a6] capitalize text-center'>
                  {data.profession}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
