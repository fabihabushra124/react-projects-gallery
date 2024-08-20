import Card from './Card';
import mobile from '../assets/camera-r.png';
import speaker from '../assets/speaker-2.png';
import headphone from '../assets/headphone-7.png';
import gameController from '../assets/game-controller.png';

const NewArrival = () => {
  return (
    <section className='common-p py-14 container m-auto'>
      <h2 className='sub-heading'>new arrival</h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        <Card img={mobile} name={'red camera'} price={'342'} />
        <Card img={speaker} name={'speaker'} price={'92'} />
        <Card img={headphone} name={'headphone'} price={'206'} />
        <Card img={gameController} name={'game controller'} price={'160'} />
      </div>
    </section>
  );
};

export default NewArrival;
