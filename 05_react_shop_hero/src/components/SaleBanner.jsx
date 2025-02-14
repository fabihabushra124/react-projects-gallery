import tab_1 from '../assets/images/tab_1.png';
import tab_2 from '../assets/images/tab_2.png';

const SaleBanner = () => {
  return (
    <section className='sale-banner row'>
      <div className='tab-1 col-lg-4'>
        <img className='img-fluid' src={tab_1} alt='Tab' />
      </div>
      <div className='sale-txt col-lg-4'>
        <h5>
          <span>11.11</span> Sale
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
      </div>
      <div className='tab-2 col-lg-4'>
        <img className='img-fluid' src={tab_2} alt='Tab' />
      </div>
    </section>
  );
};

export default SaleBanner;
