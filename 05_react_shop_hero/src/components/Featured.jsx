import ipad from '../assets/images/ipad.png';
import airpod from '../assets/images/airpod-r.png';
import macbook from '../assets/images/macbook.png';
import Button from './Button';

const Featured = () => {
  return (
    <section className='products overflow-hidden'>
      <div className='row'>
        <div className='ipad-airpod p-0 col-lg-7'>
          <div className='pt-4 d-flex' style={{ background: '#f2e5c3' }}>
            <div className='ipad-img-box'>
              <img className='img-fluid' src={ipad} alt='Ipad' />
            </div>
            <div className='center-align pe-2'>
              <h2>iPad 9</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>
          </div>
          <div className='airpod d-flex justify-content-sm-between'>
            <div className='airpod-img-box'>
              <img className='img-fluid' src={airpod} alt='Airpod' />
            </div>
            <div className='airpod-txt center-align'>
              <h2>
                <span className='light'>
                  Apple
                  <br />
                  AirPods
                  <br />
                </span>
                Max
              </h2>
              <p>
                Lorem ipsum dolor sit <br />
                amet, consectetur <br />
                adipiscing elit, sed do
              </p>
            </div>
          </div>
        </div>

        <div className='macbook col-lg-5'>
          <div className='center-align'>
            <h2>
              <span className='mac-b'>
                Macbook <br />
              </span>
              Air
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <div>
              <Button className='product-btn' text='shop now' />
            </div>
          </div>
          <div className='mac-b-img-box'>
            <img src={macbook} alt='Macbook' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
