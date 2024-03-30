import honda from '../../assets/images/honda.png';
import jaguar from '../../assets/images/jaguar.png';
import nissan from '../../assets/images/nissan.png';
import volvo from '../../assets/images/volvo.png';
import audi from '../../assets/images/audi.png';
import acura from '../../assets/images/acura.png';

const BrandSlider = () => {
  const logoList = [honda, jaguar, nissan, volvo, audi, acura];
  return (
    <div className='slider pt-5'>
      <div className='inner-slider'>
        {logoList.map((logo, inx) => (
          <div key={inx} className='slide-item'>
            <img src={logo} alt='' />
          </div>
        ))}

        {logoList.map((logo, inx) => (
          <div key={inx} className='slide-item'>
            <img src={logo} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
