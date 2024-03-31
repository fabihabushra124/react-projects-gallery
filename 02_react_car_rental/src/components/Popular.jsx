import { carData } from '../data';
import Button from './Button';

const Popular = () => {
  return (
    <section id='popular'>
      <div className='text-center'>
        <h2 className='blue-h'>our popular deals</h2>
      </div>
      <div className='container pt-3'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='d-flex align-items-center justify-content-center flex-column'>
              {carData.map((item, inx) => (
                <Button
                  key={inx}
                  name={item.name}
                  className={'populer-filter-btn'}
                />
              ))}
            </div>
          </div>
          <div className='col-lg-4'>
            <img src={carData[0].img} className='img-fluid' alt='' />
            {/* {carData.map((item, inx) => (
              <img key={inx} src={item.img} className='img-fluid' alt='' />
            ))} */}
          </div>
          <div className='col-lg-4'>
            <div className='w-75'>
              <div className='price-head'>
                <p className='m-0'>
                  <strong className='fs-4'>{carData[0].price}</strong> / per day
                </p>
              </div>
              <div className='info-item'>
                <p className='info-text'>model</p>
                <p className='info-text'>{carData[0].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
