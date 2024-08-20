import { useState } from 'react';
import image1 from '../assets/variety-of-brands.jpg';
import image2 from '../assets/shopping.jpg';
import image3 from '../assets/quality-assurance.jpg';

const Discover = () => {
  const [toggle, setToggle] = useState('1');
  const [active, setActive] = useState('active');
  const data = [
    {
      id: '1',
      img: image1,
      title: 'variety of brands',
      text: 'Choose from top brands and find the perfect gadget to suit your need',
    },
    {
      id: '2',
      img: image2,
      title: 'first shopping',
      text: 'We ensure quick and reliable shopping to you can start enjoying your new gadgets soon',
    },
    {
      id: '3',
      img: image3,
      title: 'quality assurance',
      text: 'Our gadgets are carefully selected and tested to meet the hightest quality stands',
    },
  ];
  const handleClick = (id, active) => {
    setToggle(id);
    setActive(active);
  };

  return (
    <section className='common-p py-14 container m-auto'>
      <div className='flex md:flex-row flex-col md:justify-between justify-center'>
        <div className='order-2 md:order-1 mt-5 md:mt-0'>
          {data.map(({ id, img }) =>
            toggle === id ? (
              <img
                src={img}
                key={id}
                alt=''
                className='max-w-lg aspect-square m-auto'
              />
            ) : (
              ''
            )
          )}
        </div>
        <div className='order-1 md:order-2'>
          <h2 className='sub-heading mb-5 text-left'>
            discover our wide range of gadgets
          </h2>
          <p className='text-slate-700 mb-5'>
            At our company we offer a variety of gadgets at affordable price.
            <br />
            With first shipping you can get your favorite gadget deliver to your
            doorstep in no time.
          </p>
          <ul className='discover-list'>
            {data.map(({ id, title, text }) => (
              <li
                key={id}
                onClick={() => handleClick(id, 'active')}
                className={toggle === id ? active : ''}
              >
                <h5>{title}</h5>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Discover;
