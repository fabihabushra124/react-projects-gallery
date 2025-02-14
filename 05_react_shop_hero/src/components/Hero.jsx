import iphone from '../assets/images/iphone_15_pro.png';
import Button from './Button';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container px-4'>
        <div className='d-lg-flex justify-content-lg-between'>
          <div className='center-align'>
            <span className='pro-beyond'>Browse the newest</span>
            <h1 className='ps-lg-3'>
              <span className='iphone-txt'>Innovate </span>
              <br />
              your lifestyle
            </h1>
            <p className='ps-lg-3'>
              Find top-tier gadgets. Upgrade your tech with our curated
              collection.
            </p>
            <div className='ps-lg-3'>
              <Button className='hero-btn' text='shop now' />
            </div>
          </div>
          <div className='iphone'>
            <img src={iphone} className='img-fluid' alt='Iphone image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
