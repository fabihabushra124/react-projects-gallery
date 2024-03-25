import { Link as SmoothScroll } from 'react-scroll';
import { FaLocationDot } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquarePinterest } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  const location = ['USA', 'UK', 'Russia', 'India', 'Bangladesh'];
  const quickLinks = [
    { tag: 'home', id: 'hero' },
    { tag: 'new arrivals', id: 'newArrivals' },
    { tag: 'populer', id: 'populer' },
    { tag: 'feedbacks', id: 'feedbacks' },
    { tag: 'contact', id: 'contact' },
  ];
  const extraLinks = ['account info', 'ordered items', 'payment method'];
  const contactInfo = [
    {
      info: '123-456-7890',
      icon: <IoIosCall className='text-purple-600 me-2' />,
    },
    {
      info: '123-456-7890',
      icon: <IoIosCall className='text-purple-600 me-2' />,
    },
    {
      info: 'bookshop@email.com',
      icon: <MdEmail className='text-purple-600 me-2' />,
    },
  ];

  return (
    <footer
      className='pt-16 border-b-4 border-b-gray-700 bg-gray-900'
      id='contact'
    >
      <div className='container m-auto px-6  border-b border-b-gray-500'>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white'>
          <div>
            <h3 className='capitalize font-semibold text-xl'>our location</h3>
            {location.map((item, inx) => (
              <div className='flex items-center' key={inx}>
                <FaLocationDot className='text-purple-600 me-2' />
                <p className='capitalize text-gray-400'>{item}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className='capitalize font-semibold text-xl'>quick links</h3>
            <ul>
              {quickLinks.map((item, inx) => (
                <li className='flex items-center' key={inx}>
                  <FaArrowRight className='text-purple-600 me-2' />
                  <SmoothScroll
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='capitalize text-gray-400'
                  >
                    {item.tag}
                  </SmoothScroll>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='capitalize font-semibold text-xl'>extra links</h3>
            <ul>
              {extraLinks.map((item, inx) => (
                <li className='flex items-center' key={inx}>
                  <FaArrowRight className='text-purple-600 me-2' />
                  <SmoothScroll
                    to='hero'
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='capitalize text-gray-400'
                  >
                    {item}
                  </SmoothScroll>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='capitalize font-semibold text-xl'>contact info</h3>
            {contactInfo.map((item, inx) => (
              <div className='flex items-center' key={inx}>
                {item.icon}
                <p className='text-gray-400'>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
        <ul className='flex pt-12 pb-8 justify-center'>
          <li>
            <Link to='/'>
              <FaFacebookSquare className='text-purple-500 text-3xl me-4 hover:text-purple-600 hover:-translate-y-1 transform duration-500' />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaSquareXTwitter className='text-purple-500 text-3xl me-4 hover:text-purple-600 hover:-translate-y-1 transform duration-500' />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaInstagramSquare className='text-purple-500 text-3xl me-4 hover:text-purple-600 hover:-translate-y-1 transform duration-500' />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaLinkedin className='text-purple-500 text-3xl me-4 hover:text-purple-600 hover:-translate-y-1 transform duration-500' />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaSquarePinterest className='text-purple-500 text-3xl me-4 hover:text-purple-600 hover:-translate-y-1 transform duration-500' />
            </Link>
          </li>
        </ul>
      </div>
      <div className='text-center py-10'>
        <span className='text-gray-500'>&copy; 2024</span>{' '}
        <a className='capitalize text-purple-500' href='#'>
          book shop
        </a>
        <span className='text-gray-500 capitalize'>
          {' '}
          | all rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
