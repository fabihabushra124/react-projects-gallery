import Card from './Card';
import ecoSmart from '../assets/eco-smart-home.png';
import blackCamera from '../assets/camera-b-1.png';
import mouse from '../assets/mouse-1.png';
import keyBoard from '../assets/keyboard-2.png';

const BestProducts = () => {
  return (
    <section className='container mx-auto common-p py-14'>
      <h2 className='sub-heading'>popular</h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
        <Card
          rating={'5'}
          img={blackCamera}
          name={'black camera'}
          price={'342'}
        />
        <Card rating={'4.3'} img={mouse} name={'mouse'} price={'92'} />
        <Card
          rating={'3.8'}
          img={ecoSmart}
          name={'eco smart home'}
          price={'206'}
        />
        <Card rating={'3.8'} img={keyBoard} name={'keyboard'} price={'160'} />
      </div>
    </section>
  );
};

export default BestProducts;
