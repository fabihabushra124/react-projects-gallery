import featureImg1 from '../assets/featured-1.png';
import featureImg2 from '../assets/featured-2.png';
import featureImg3 from '../assets/featured-3.png';
import featureImg4 from '../assets/featured-4.png';
import featureImg5 from '../assets/featured-5.png';
import featureImg6 from '../assets/featured-6.png';

const Feature = () => {
  return (
    <section className='container mx-auto common-p py-6'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        <div className='lg:col-span-2 lg:row-span-2 bg-slate-600 text-white featured-box'>
          <div className='text-right'>
            <h3>Gaming Zone</h3>
            <p>Level up your gaming experience</p>
          </div>
          <div>
            <img src={featureImg1} alt='' className='max-w-[28rem]' />
          </div>
        </div>
        <div className='bg-cyan-500 text-white featured-box'>
          <div>
            <h3>Wearable Tech</h3>
            <p>Stay connected on the go</p>
          </div>
          <div>
            <img
              src={featureImg2}
              alt=''
              className='max-w-[7.5rem] float-right'
            />
          </div>
        </div>
        <div className='bg-yellow-500 text-white featured-box'>
          <div className='lg:text-left text-right'>
            <h3>Capture the Moment</h3>
            <p>Professional photography gear</p>
          </div>
          <div>
            <img
              src={featureImg3}
              alt=''
              className='max-w-[9rem] lg:float-right'
            />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between bg-lime-600 text-white featured-box lg:flex-row'>
          <div>
            <h3>Audio Excellence</h3>
            <p>Immerse yourself in superior sound</p>
          </div>
          <div>
            <img
              src={featureImg4}
              alt=''
              className='max-w-[11rem] float-right'
            />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between bg-purple-600 text-white featured-box lg:flex-row'>
          <div className='text-right'>
            <h3>Future of Work</h3>
            <p>Boost your productivity</p>
          </div>
          <div className='lg:order-first'>
            <img src={featureImg5} alt='' className='max-w-[18rem]' />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between bg-slate-300 featured-box lg:flex-row'>
          <div>
            <h3 className='capitalize'>Virtual Reality</h3>
            <p>Step into the future with VR</p>
          </div>
          <div>
            <img
              src={featureImg6}
              alt=''
              className='max-w-[14.8rem] float-right'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

// Virtual Reality
// Title: “Step into the Future with VR”
// Description: Feature the latest VR headsets, controllers, and immersive gaming experiences.
// 8. Eco-Friendly Tech
// Title: “Sustainable Gadgets for a Greener Tomorrow”
// Description: Highlight eco-friendly gadgets, solar-powered devices, and energy-efficient products.
// Smart Home Solutions
// Title: “Transform Your Home into a Smart Haven”
// Description: Feature eco-friendly home systems, smart thermostats, security cameras, and automated lighting solutions.
// 4. Wearable Tech
// Title: “Stay Connected on the Go”
// Description: Present the latest smartwatches, fitness trackers, and wearable health monitors.
