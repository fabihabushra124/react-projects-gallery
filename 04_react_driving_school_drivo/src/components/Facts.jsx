const Facts = () => {
  return (
    <div className='relative z-10 md:flex md:justify-center md:max-w-4xl max-w-md mx-auto md:mt-[-8rem] lg:pt-0 py-16 px-2'>
      <article className='fact animate-[showSpin_0.5s_linear]'>
        <div className='icon'>
          <i className='fa-solid fa-shield'></i>
        </div>
        <h3>
          learn basics of <br />
          driving safety
        </h3>
        <p>
          Amet deserunt iste tempore <br /> nulla quos quas eum <br />
          doloremque ducimus corrupti
        </p>
      </article>
      <article className='fact animate-[showSpin_1s_linear]'>
        <div className='icon'>
          <i className='fa-solid fa-file-video'></i>
        </div>
        <h3>
          Informational <br />
          videos & materials
        </h3>
        <p>
          Amet deserunt iste tempore <br /> nulla quos quas eum <br />
          doloremque ducimus corrupti
        </p>
      </article>
      <article className='fact animate-[showSpin_1.5s_linear]'>
        <div className='icon'>
          <i className='fa-solid fa-id-card'></i>
        </div>
        <h3>
          fully insured <br />
          licensed
        </h3>
        <p>
          Amet deserunt iste tempore <br /> nulla quos quas eum <br />
          doloremque ducimus corrupti
        </p>
      </article>
    </div>
  );
};

export default Facts;
