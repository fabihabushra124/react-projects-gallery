import logo from '../assets/images/logo.png';
import twitter from '../assets/icons/twitter.png';
import facebook from '../assets/icons/facebook.png';
import tiktok from '../assets/icons/tiktok.png';
import instagram from '../assets/icons/instagram.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 mb-4 d-flex justify-content-md-start justify-content-center order-md-1'>
            <a href='#'>
              <img
                style={{ maxWidth: '220px' }}
                className='img-fluid'
                src={logo}
                alt='logo'
              />
            </a>
          </div>

          <div className='col-lg-3 col-md-6 mb-4 order-md-3'>
            <h6 className='text-md-start text-center'>Services</h6>
            <ul className='services text-md-start text-center'>
              <li>
                <a href='#'>Bonus program</a>
              </li>
              <li>
                <a href='#'>Gift cards</a>
              </li>
              <li>
                <a href='#'>Credit and payment</a>
              </li>
              <li>
                <a href='#'>Service contracts</a>
              </li>
              <li>
                <a href='#'>Non-cash account</a>
              </li>
              <li>
                <a href='#'>Payment</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 mb-4 order-md-4'>
            <h6 className='text-md-start text-center'>
              Assistance to the buyer
            </h6>
            <ul className='assistance text-md-start text-center'>
              <li>
                <a href='#'>Find an order</a>
              </li>
              <li>
                <a href='#'>Terms of delivery</a>
              </li>
              <li>
                <a href='#'>Exchange and return of goods</a>
              </li>
              <li>
                <a href='#'>Guarantee</a>
              </li>
              <li>
                <a href='#'>Frequently asked questions</a>
              </li>
              <li>
                <a href='#'>Terms of use of the site</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 mb-4 order-md-2'>
            <ul className='social-media d-flex justify-content-around'>
              <li>
                <a href='#'>
                  <img src={twitter} alt='Icon' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={facebook} alt='Icon' />
                </a>
              </li>

              <li>
                <a href='#'>
                  <img src={tiktok} alt='Icon' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={instagram} alt='Icon' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
