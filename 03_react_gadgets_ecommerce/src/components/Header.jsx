import Button from './Button';
import carouselImg1 from '../assets/carousel-1-t.png';
import carouselImg2 from '../assets/carousel-2-t.png';
import carouselImg3 from '../assets/carousel-3-t.png';
import carouselImg4 from '../assets/carousel-4-t.png';
import carouselImg5 from '../assets/carousel-5-t.png';
// import useEmblaCarousel from 'embla-carousel-react';
// import AutoScroll from 'embla-carousel-auto-scroll';

const Header = () => {
  const imgArr = [
    carouselImg1,
    carouselImg2,
    carouselImg3,
    carouselImg4,
    carouselImg5,
  ];
  // const [emblaRef] = useEmblaCarousel({ loop: true }, [
  //   AutoScroll({ startDelay: 100 }),
  // ]);

  return (
    <header className='h-screen bg-violet-500 overflow-hidden common-p'>
      <div className='container mx-auto h-full md:flex md:justify-between'>
        <div className='pt-16 md:pt-0 flex flex-col md:justify-center justify-end'>
          <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold mb-4'>
            Discover the Best <br />
            Electronic Gadgets for You
          </h1>
          <p className='mb-4'>
            Experience the latest technology with our wide range of electronic
            gadgets.
          </p>
          <div className=' space-x-5'>
            <Button text='shop now' />
            <Button
              text='learn more'
              className='from-transparent via-transparent to-transparent text-slate-950 hover:text-white'
            />
          </div>
        </div>
        <div className='h-full overflow-hidden flex justify-center mt-6 md:mt-0'>
          <div className='slider md:mr-4 mr-2'>
            <div className='inner-slider up'>
              {imgArr.map((img, inx) => (
                <div key={inx} className='slide-item'>
                  <img src={img} alt='' />
                </div>
              ))}
            </div>
            <div className='inner-slider up'>
              {imgArr.map((img, inx) => (
                <div key={inx} className='slide-item'>
                  <img src={img} alt='' />
                </div>
              ))}
            </div>
          </div>
          <div className='slider'>
            <div className='inner-slider down'>
              {imgArr.map((img, inx) => (
                <div key={inx} className='slide-item'>
                  <img src={img} alt='' />
                </div>
              ))}
            </div>
            <div className='inner-slider down'>
              {imgArr.map((img, inx) => (
                <div key={inx} className='slide-item'>
                  <img src={img} alt='' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
