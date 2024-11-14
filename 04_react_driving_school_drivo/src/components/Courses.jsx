import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import courseImg1 from '../assets/img/course-1.jpg';
import courseImg2 from '../assets/img/course-2.jpg';
import courseImg3 from '../assets/img/course-3.jpg';
import courseImg4 from '../assets/img/course-4.jpg';
import courseImg5 from '../assets/img/course-5.jpg';
import courseImg6 from '../assets/img/course-6.jpg';
import instructor1 from '../assets/img/instructor-1.jpg';
import instructor2 from '../assets/img/instructor-2.jpg';
import instructor3 from '../assets/img/instructor-3.jpg';
import Button from './Button';

const Courses = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      playOnInit: true,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      delay: 3000,
    }),
  ]);

  const [scrolling, setScrolling] = useState(false);
  const headingRef = useRef();
  const coursesRef = useRef();
  const formRef = useRef();
  const triggerBottom = (window.innerHeight / 5) * 4;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const headerTop = headingRef.current.getBoundingClientRect().top;
      const coursesTop = coursesRef.current.getBoundingClientRect().top;
      const formTop = formRef.current.getBoundingClientRect().top;
      headerTop < triggerBottom && setScrolling(true);
      coursesTop < triggerBottom && setScrolling(true);
      formTop < triggerBottom && setScrolling(true);
    });
  }, [triggerBottom]);

  const coursesData = [
    {
      img: courseImg1,
      title: 'defensive driving',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error corrupti',
      price: '$80',
      level: 'intermediate',
      instructorImg: instructor1,
      instructorName: 'John Doe',
      time: '6 week',
    },
    {
      img: courseImg2,
      title: 'professional driving',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error corrupti',
      price: '$150',
      level: 'advance',
      instructorImg: instructor2,
      instructorName: 'John Doe',
      time: '9 week',
    },
    {
      img: courseImg3,
      title: 'traffic science',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error corrupti',
      price: '$70',
      level: 'intermediate',
      instructorImg: instructor1,
      instructorName: 'John Doe',
      time: '4 week',
    },
    {
      img: courseImg4,
      title: 'highway driving',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error corrupti',
      price: '$60',
      level: 'beginner',
      instructorImg: instructor3,
      instructorName: 'John Doe',
      time: '4 week',
    },
    {
      img: courseImg5,
      title: 'truck driving',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error corrupti',
      price: '$80',
      level: 'intermediate',
      instructorImg: instructor2,
      instructorName: 'John Doe',
      time: '4 week',
    },
    {
      img: courseImg6,
      title: 'truck driving',
      detail:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error corrupti',
      price: '$180',
      level: 'advance',
      instructorImg: instructor1,
      instructorName: 'John Doe',
      time: '11 week',
    },
  ];

  return (
    <section className='parallax-bg min-h-screen' id='trendingCourses'>
      <div className='bg-slate-100 bg-opacity-80'>
        <div className='container mx-auto'>
          <div
            ref={headingRef}
            className={`${
              scrolling ? 'animate-[fadeIn_2s_linear]' : 'opacity-0'
            }`}
          >
            <h2 className='section-title text-center'>trending courses</h2>
            <h2 className='sub-heading mb-3 text-center'>
              our popular driving courses
            </h2>
          </div>
          <div className='embla mb-20' ref={emblaRef}>
            <div
              ref={coursesRef}
              className={`embla__container ${
                scrolling ? 'animate-[fadeIn_2s_linear]' : 'opacity-0'
              }`}
            >
              {coursesData.map((course, inx) => (
                <div
                  className='embla__slide md:flex-[0_0_65%] flex-[0_0_100%] max-w-2xl p-2'
                  key={inx}
                >
                  <div className='grid grid-cols-2 sm:py-4 sm:ps-4 py-3 ps-3 bg-white rounded-2xl'>
                    <div className='sm:pr-4 pr-3 max-h-[24rem]'>
                      <img
                        src={course.img}
                        alt=''
                        className='aspect-[9/16] object-cover h-full w-full rounded-2xl'
                      />
                    </div>
                    <div className='relative'>
                      <div className='flex justify-between sm:py-2 py-1 sm:px-4 px-3 rounded-tl-[2rem] bg-[#6485a6] text-white'>
                        <h3 className='sm:text-xl text-lg'>{course.price}</h3>
                        <div className='flex items-center text-sm'>
                          <i className='fa-solid fa-chart-simple mr-1'></i>
                          <p>{course.level}</p>
                        </div>
                      </div>
                      <div className='sm:pr-4 pr-3 pb-8 mt-4'>
                        <h3 className='text-lg mb-2'>{course.title}</h3>
                        <p className='text-slate-500 sm:text-[16px] text-sm'>
                          {course.detail}
                        </p>
                        <div className='sm:flex max-w-64 w-full sm:mt-5 my-3'>
                          <div className='flex'>
                            <img
                              src={course.instructorImg}
                              alt=''
                              className='sm:w-10 w-8 sm:h-10 h-8 rounded-full aspect-square mr-3'
                            />

                            <div className='sm:border-r-[1px] sm:border-gray-300 pr-2'>
                              <h4 className='sm:text-[16px] text-sm'>
                                {course.instructorName}
                              </h4>
                              <p className='text-[#6485a6] sm:text-sm text-xs'>
                                instructor
                              </p>
                            </div>
                          </div>
                          <div className='flex items-center sm:text-sm text-xs sm:ml-3 sm:mt-0 mt-3'>
                            <i className='fa-solid fa-clock mr-1 text-[#6485a6]'></i>
                            <p>{course.time}</p>
                          </div>
                        </div>
                      </div>
                      <Button
                        className={
                          'absolute bottom-0 sm:text-[16px] text-sm sm:px-4 sm:py-2 px-2 py-1'
                        }
                        text={'read more'}
                        icon={<i className='fa-solid fa-arrow-right ml-2'></i>}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='max-w-3xl w-full mx-auto px-2'>
            <div
              ref={formRef}
              className={`bg-[#6485a6] md:p-8 p-6 rounded-lg ${
                scrolling ? 'animate-[slidToTop_2s_linear]' : 'opacity-0'
              }`}
            >
              <h3 className='text-white text-center mb-4 md:text-3xl text-2xl'>
                make an appointment
              </h3>

              <form>
                <div className='grid md:grid-cols-2 gap-3'>
                  <input
                    type='text'
                    name='first-name'
                    placeholder='first name'
                    required
                  />
                  <input
                    type='text'
                    name='last-name'
                    placeholder='last name'
                    required
                  />
                  <input
                    type='text'
                    name='course-type'
                    placeholder='course type'
                    required
                  />
                  <input
                    type='text'
                    name='car-type'
                    placeholder='car type'
                    required
                  />
                  <textarea
                    className='md:col-span-2'
                    name='message'
                    rows={4}
                    cols={20}
                    placeholder='message'
                  ></textarea>
                </div>
                <Button
                  className={
                    'bg-slate-200 text-black hover:bg-white w-full mt-4'
                  }
                  text={'submit'}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
