import Button from '../Button';
import {
  CiLocationOn,
  CiDollar,
  CiCalendarDate,
  CiBadgeDollar,
} from 'react-icons/ci';
import { IoCarSportOutline } from 'react-icons/io5';

const SearchBox = () => {
  const locationList = [
    { text: 'select your location', value: 'default' },
    { text: 'austin', value: 'austin' },
    { text: 'chicago', value: 'chicago' },
    { text: 'dallas', value: 'dallas' },
  ];
  const brandList = [
    { text: 'brand', value: 'default' },
    { text: 'toyota', value: 'toyota' },
    { text: 'holden', value: 'holden' },
    { text: 'maecedes-benz', value: 'maecedes-benz' },
  ];
  const modelList = [
    { text: 'model', value: 'default' },
    { text: 'kia-rio', value: 'kia-rio' },
    { text: 'mitsubishi', value: 'mitsubishi' },
    { text: 'ford', value: 'ford' },
  ];

  return (
    <div className='container' style={{ marginTop: '-75px' }}>
      <div className='search-box'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-sm-4'>
                <div className='pb-3 d-flex align-items-center'>
                  <CiLocationOn className='icon' />
                  <div>
                    <h2>location</h2>
                    <select className='form-control shadow-none'>
                      {locationList.map((location, inx) => (
                        <option key={inx} value={location.value}>
                          {location.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='pb-3 d-flex align-items-center'>
                  <CiDollar className='icon' />
                  <div>
                    <h2>select price</h2>
                    <input
                      className='form-control shadow-none'
                      type='number'
                      defaultValue={0}
                    />
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='pb-3 d-flex align-items-center'>
                  <CiCalendarDate className='icon' />
                  <div>
                    <h2>pick up date</h2>
                    <input
                      type='date'
                      className='form-control shadow-none'
                      placeholder='Select Date'
                    />
                  </div>
                </div>

                <div className='pb-3 d-flex align-items-center'>
                  <CiCalendarDate className='icon' />
                  <div>
                    <h2>return date</h2>
                    <input
                      type='date'
                      className='form-control shadow-none'
                      placeholder='Return Date'
                    />
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='pb-3 d-flex align-items-center'>
                  <CiBadgeDollar className='icon' />
                  <div>
                    <h2>brand</h2>
                    <select className='form-control shadow-none'>
                      {brandList.map((brand, inx) => (
                        <option key={inx} value={brand.value}>
                          {brand.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='pb-3 d-flex align-items-center'>
                  <IoCarSportOutline className='icon' />
                  <div>
                    <h2>select model</h2>
                    <select className='form-control shadow-none'>
                      {modelList.map((model, inx) => (
                        <option key={inx} value={model.value}>
                          {model.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3 d-flex flex-column justify-content-center align-items-center'>
            <Button name={'search'} className={'custom-btn'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
