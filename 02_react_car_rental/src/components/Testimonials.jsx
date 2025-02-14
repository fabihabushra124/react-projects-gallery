import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonialsData } from '../testimonialsData';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonial = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.4,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1195,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 956,
        settings: {
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1.08,
        },
      },
      {
        breakpoint: 562,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='testimonials'>
      <div className='container-fluid'>
        <div className='text-center'>
          <h2 className='blue-h'>testimonials</h2>
          <h3 className='sub-h'>What customers say about us?</h3>
        </div>
        <div className='slider-container py-4 overflow-hidden'>
          <Slider {...settings}>
            {testimonialsData.map((item, inx) => (
              <div key={inx} className='testimonial-card'>
                <div className='img-box'>
                  <img src={item.img} alt='' />
                </div>
                <div className='content'>
                  <div className='mb-3'>
                    <h5>
                      <span className='fs-1'>{item.rating}</span> stars
                    </h5>
                    {[...Array(4)].map((_, inx) =>
                      inx < 4 ? <FaStar className='star' key={inx} /> : ''
                    )}
                    {item.rating < 5 ? (
                      <FaStarHalfAlt className='star' />
                    ) : (
                      <FaStar className='star' />
                    )}
                  </div>
                  <p className='feedback'>{item.feedback}</p>
                  <p className='name'>{item.name}</p>
                  <p className='location'>from {item.location}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
