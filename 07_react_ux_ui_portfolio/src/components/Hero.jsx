import heroImg from '../assets/img/hero-img.png';

const Hero = () => {
  return (
    <section className='container m-auto px-6 min-h-screen'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div>
          <p>
            <span className='text-black dark:text-white'>Hi i am</span> <br />
            <span className='capitalize text-primary text-lg'>
              muhammad bin jamel
            </span>
          </p>
          <h1 className='text-black dark:text-white text-5xl font-semibold'>
            UX & UI <br />
            <span className='md:ms-32'>Designer</span>
          </h1>
          <p className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
            consectetur lacus
          </p>
        </div>
        <div>
          <div>
            <img src={heroImg} alt='Hero Image' />
          </div>
          <div className='flex'>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-x-twitter'></i>
            <i className='fa-brands fa-linkedin'></i>
            <i className='fa-brands fa-instagram'></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
