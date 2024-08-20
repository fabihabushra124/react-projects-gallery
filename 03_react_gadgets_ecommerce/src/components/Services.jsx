import shopping from '../assets/browse-select-and-purchase.png';
import serviceLogo1 from '../assets/web-developer.gif';
import serviceLogo2 from '../assets/delivery-truck.gif';
import serviceLogo3 from '../assets/payment.gif';
import serviceLogo4 from '../assets/24-hours-support.gif';

const Services = () => {
  return (
    <section className='common-p py-14 bg'>
      <div className='container mx-auto'>
        <h2 className='sub-heading'>browse, select, and purchase</h2>
        <div className='grid md:grid-cols-5 gap-8'>
          <div className='service-box md:order-1'>
            <div className=''>
              <img src={serviceLogo1} alt='' />
              <h5>easy shopping</h5>
              <p>
                Our website provide a user-friendly interface that makes
                shopping easier.
              </p>
            </div>
          </div>
          <div className='service-box md:order-3'>
            <div className=''>
              <img src={serviceLogo2} alt='' />
              <h5>fast delivery</h5>
              <p>Get your gadgets delivered to your doorstep in no time.</p>
            </div>
          </div>
          <div className='service-box md:order-4'>
            <div className=''>
              <img src={serviceLogo3} alt='' />
              <h5>secure payment</h5>
              <p>
                We offer multiple secure payment options to ensure a safe
                hassle-free shopping experience.
              </p>
            </div>
          </div>
          <div className='service-box md:order-5'>
            <div className=''>
              <img src={serviceLogo4} alt='' />
              <h5>24/7 support</h5>
              <p>
                Our dedicated custom support team is available round the clock
                to assist you with any queries or concerns.
              </p>
            </div>
          </div>
          <div className='md:row-span-2 md:col-span-3 md:order-2 flex justify-center items-center'>
            <img src={shopping} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
