import mobileApp from '../assets/images/mobile_app.png';
import googlePlay from '../assets/images/google_play.png';
import appStore from '../assets/images/app_store.png';

const MobileApp = () => {
  return (
    <section id='mobileApp'>
      <div className='container d-lg-flex justify-content-lg-between'>
        <div className='content'>
          <div>
            <h2 className='blue-h'>Download</h2>
          </div>
          <h3 className='sub-h'>
            Download RentCar <br />
            app for <span>free</span>
          </h3>
          <p>For faster, easier booking and exclusive deals.</p>
          <div className='d-flex'>
            <img src={googlePlay} className='img-fluid me-4' alt='' />
            <img src={appStore} className='img-fluid me-4' alt='' />
          </div>
        </div>
        <div className='mt-5 mt-lg-0'>
          <img src={mobileApp} className='img-fluid m-auto m-lg-0' alt='' />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
