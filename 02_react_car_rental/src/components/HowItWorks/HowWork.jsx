import blueLocation from '../../assets/images/icons/blue-location-tick.png';
import blueCar from '../../assets/images/icons/blue-car.png';
import blueCalendar from '../../assets/images/icons/blue-calendar.png';
import BrandSlider from './BrandSlider';

const HowWork = () => {
  const cardInfo = [
    {
      img: blueLocation,
      title: 'Choose location',
      text: `Choose your and find
      your best car`,
    },
    {
      img: blueCalendar,
      title: 'Pick-up date',
      text: `Select your pick up date and
      time to book your car`,
    },
    {
      img: blueCar,
      title: 'Book your car',
      text: `Book your car and we will deliver
      it directly to you`,
    },
  ];

  return (
    <section id='itswork'>
      <div className='container text-center'>
        <h2 className='blue-h'>how it work</h2>
        <h3 className='sub-h'>Rent with following 3 working steps</h3>

        <div style={{ maxWidth: '985px' }}>
          <div className='row g-4 pt-4'>
            {cardInfo.map((card, inx) => (
              <div key={inx} className='col-md-4'>
                <div className='card text-center' style={{ border: '0' }}>
                  <div className='img-back'>
                    <img
                      src={card.img}
                      className='img-fluid'
                      width='48'
                      style={{ margin: 'auto' }}
                      alt=''
                    />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{card.title}</h5>
                    <p className='card-text' style={{ whiteSpace: 'pre-line' }}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BrandSlider />
    </section>
  );
};

export default HowWork;
