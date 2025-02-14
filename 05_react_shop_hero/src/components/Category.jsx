import phone from '../assets/icons/phone.png';
import smart_watches from '../assets/icons/smart_watches.png';
import cameras from '../assets/icons/cameras.png';
import headphones from '../assets/icons/headphones.png';
import computers from '../assets/icons/computers.png';
import gaming from '../assets/icons/gaming.png';

const Category = () => {
  return (
    <section className='container category py-4'>
      <h3>Browse By Category</h3>
      <div id='carouselExample' className='carousel slide carousel-dark'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row justify-content-lg-between justify-content-center py-3'>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={phone} alt='Icon' />
                <p>Phones</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={smart_watches} alt='Icon' />
                <p>Smart Watch</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={cameras} alt='Icon' />
                <p>Cameras</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={headphones} alt='Icon' />
                <p>Headphones</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={computers} alt='Icon' />
                <p>Computers</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={gaming} alt='Icon' />
                <p>Gaming</p>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row justify-content-lg-between justify-content-center py-3'>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={phone} alt='Icon' />
                <p>Phones</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={smart_watches} alt='Icon' />
                <p>Smart Watch</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={cameras} alt='Icon' />
                <p>Cameras</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={headphones} alt='Icon' />
                <p>Headphones</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={computers} alt='Icon' />
                <p>Computers</p>
              </div>
              <div className='category-card col-lg-2 col-md-4 col-sm-6'>
                <img src={gaming} alt='Icon' />
                <p>Gaming</p>
              </div>
            </div>
          </div>
        </div>
        <div className='caro-btns'>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
