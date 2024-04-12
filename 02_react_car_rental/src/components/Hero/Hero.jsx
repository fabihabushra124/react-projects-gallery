import { FaCarSide } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

import Button from '../Button';
import heroCar from '../../assets/images/hero_car.png';
import SearchBox from './SearchBox';

const Hero = () => {
  return (
    <header id='home'>
      <div className='banner container-fluid'>
        <div className='row' style={{ minHeight: '87vh' }}>
          <div className='col-lg-5 mb-lg-0 mb-4' style={{ paddingLeft: '10%' }}>
            <div
              className='d-lg-flex flex-lg-column justify-content-lg-center h-100'
              style={{ maxHeight: '455px' }}
            >
              <h1>
                Save <span>big</span>
                <br />
                renting our cars
              </h1>
              <p>
                Get a car wherever and whenever you <br />
                need it with your IOS and Android device.
              </p>
              <div>
                <Button
                  name={'book ride'}
                  icon={<FaCarSide className='d-inline' />}
                  className={'me-3 mt-4'}
                />
                <Button
                  name={'learn more'}
                  icon={<MdKeyboardDoubleArrowRight className='d-inline' />}
                  className={'black mt-4'}
                />
              </div>
            </div>
          </div>

          <div className='col-lg-7 p-0'>
            <div className='d-flex align-items-end justify-content-end h-100'>
              <img
                src={heroCar}
                className='img-fluid'
                style={{
                  marginBottom: '-23px',
                }}
                alt='Car Image'
              />
            </div>
          </div>
        </div>
      </div>
      <SearchBox />
    </header>
  );
};

export default Hero;
