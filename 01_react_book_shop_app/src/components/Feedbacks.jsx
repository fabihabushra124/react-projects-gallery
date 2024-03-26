import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { feedbackList } from '../feedbackData';

const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className='py-16 b-line' id='feedbacks'>
      <div className='container m-auto px-4 text-center'>
        <div className='sub-h-box'>
          <h2 className='sub-h'>feedbacks</h2>
        </div>
        <div className='slider-container py-10'>
          <Slider {...settings}>
            {feedbackList.map((list, inx) => (
              <div
                key={inx}
                className='text-center bg-gray-700 text-white px-3 py-6 rounded-md shadow-lg shadow-black/30 !h-full'
              >
                <img
                  src={list.img}
                  alt=''
                  className='rounded-full w-24 shadow-lg shadow-black/30 m-auto aspect-square border-2 border-purple-600'
                />
                <h5 className='font-semibold text-xl capitalize mt-2 mb-3'>
                  {list.name}
                </h5>
                <p className='font-semibold text-gray-400'>
                  <FaQuoteLeft className='inline-block pe-1 w-5 text-purple-600 mb-3' />
                  {list.feedback}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
